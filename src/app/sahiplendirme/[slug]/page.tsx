import React from 'react'
import { getAdvert, getAdverts } from '@/utils/supabaseServerRequests'
import Image from 'next/image'
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel"
import { Mail, Phone } from "lucide-react"
import AdvertCard from '@/components/ui/AdvertCard'
import Link from 'next/link'
import {redirect} from 'next/navigation'
import { skip } from 'node:test'

export async function generateMetadata({params}: {params: {slug: string}}) {
  const advert = await getAdvert({id: params.slug})

  return {
    title: `${advert.title} - Valens Veteriner Kliniği`,
  }
}

const URL = "https://ftvzmjhulohohammuanz.supabase.co/storage/v1/object/public/"

const CategoryColors = {
  "Kedi": "bg-purple-400",
  "Köpek": "bg-yellow-400",
  "Diğer": "bg-gray-400"
}

async function SingleAdvert({params}: any) {
  const advert = await getAdvert({id: params.slug})
  const otherAdverts = await getAdverts({category: advert.category, limit: 3, skip: [advert.id]})

  if (advert.status !== true) {
    redirect("/")
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container flex justify-center px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="bg-orange-50 overflow-hidden max-w-2xl w-full lg:w-2/3">
            <CardHeader>
              <div className="flex flex-col items-start space-y-2">
                <Badge variant="secondary" className={CategoryColors[advert.category as keyof typeof CategoryColors]}>{advert.category}</Badge>
                <CardTitle className="text-3xl font-bold">{advert.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {advert.images && advert.images.length > 0 ? (
                    advert.images.map((image: string, index: number) => (
                      <CarouselItem key={index}>
                        <Image
                          src={URL + image}
                          alt={`${advert.title} - Fotoğraf ${index + 1}`}
                          width={600}
                          height={400}
                          className="rounded-lg object-cover w-full h-64 md:h-96"
                        />
                      </CarouselItem>
                    ))
                  ) : (
                    <CarouselItem>
                      <div className="h-64 md:h-96 w-full bg-gray-200 flex items-center justify-center rounded-lg">
                        <span className="text-gray-500">Resim Yok</span>
                      </div>
                    </CarouselItem>
                  )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Açıklama</h2>
                <p className="text-gray-600">{advert.message}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">İlan Sahibi</h2>
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-medium">{advert.name}</p>
                    <p className="text-sm text-gray-500">{advert.email}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">İletişim Bilgileri</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span>{advert.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span>{advert.phone}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">İletişime Geç</Button>
            </CardFooter>
          </Card>

          {otherAdverts && otherAdverts.length > 0 && (
            <div className="w-full flex flex-col lg:w-1/3 space-y-4">
              <h2 className="text-2xl font-bold">Benzer İlanlar</h2>
              {otherAdverts.map((otherAdvert: any) => (
                <Link href={`/sahiplendirme/${otherAdvert.id}`} key={otherAdvert.id}>
                  <AdvertCard advert={otherAdvert} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleAdvert
