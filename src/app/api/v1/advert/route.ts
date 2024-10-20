import { NextRequest, NextResponse } from 'next/server'
import rateLimit from '@/utils/rateLimit'
import createClient from '@/utils/supabaseApi'

const limiter = rateLimit(5, 86400000)

const cache = new Map()

const supabase = createClient()
const GetAdverts = async () => {
  const {data, error} = await supabase.from('adverts').select('*')
  return data
}

GetAdverts().then(data => {
  if (data) {
    data.forEach(advert => {
      cache.set(advert.email, advert.phone)
    })
  }
})

export async function POST(req: NextRequest) {
    const response = limiter(req)
    if (response) {
      return NextResponse.json({ message: 'Çok fazla istek gönderildi' }, { status: 429 })
    }

    const body = await req.json()

    if (!validateBody(body)) {
      return NextResponse.json({ message: 'Lütfen tüm alanları doldurunuz' }, { status: 400 })
    }

    if (cache.has(body.email)) {
      return NextResponse.json({ message: 'Bu email adresi ile daha önce başvurulmuş' }, { status: 400 })
    }

    const supabase = createClient()
    const {data, error} = await supabase.from('adverts').insert({
      name: body.name,
      email: body.email,
      phone: body.phone,
      title: body.title,
      message: body.message,
      category: body.petType,
      images: body.images,
    })

    cache.set(body.email, body.phone)

    if (error) {
      console.log(error)
      return NextResponse.json({ message: 'Bir hata oluştu' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Başvurunuz alındı' }, { status: 200 })
}

const validateBody = (body: any) => {
  const requiredFields = ['name', 'email', 'phone', 'title', 'message', 'petType', 'images'];
  for (const field of requiredFields) {
      if (!body[field]) {
            return false;
        }
    }
  return true;
}
