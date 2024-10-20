"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './Dialog'
import { Button } from './Button'
import { Input } from './Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from './Select'
import { Textarea } from './Textarea'
import Image from 'next/image'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'
import { supabaseClient } from '@/utils/supabaseClient'

const formSchema = z.object({
  name: z.string().min(1, { message: 'Adınızı giriniz' }),
  email: z.string().email({ message: 'Geçerli bir email adresi giriniz' }),
  phone: z.string().min(1, { message: 'Telefon numaranızı giriniz' }),
  title: z.string().min(1, {message: 'Başlık giriniz'}),
  message: z.string().min(1, { message: 'Mesajınızı giriniz' }),
  petType: z.enum(["Kedi", "Köpek", "Diğer"]).default("Kedi"),
  images: z.array(z.any()).min(1).max(3, { message: 'En fazla 3 resim seçebilirsiniz' } ),
})

type FormValues = z.infer<typeof formSchema>

function AdoptionForm() {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const [images, setImages] = useState<any[]>([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && images.length < 3) {
      const fileList = Array.from(e.target.files);
      for (const image of fileList) {
        if (image.size > 4000000) {
          toast.error('Resimlerinizin boyutu 4MB\'yi geçemez')
          return
        }
      }

      const newImages = fileList.slice(0, 3 - images.length)
      setImages(prev => [...prev, ...newImages])
      setValue('images', [...images, ...newImages])
    }
  }

  const onSubmit = async (data: FormValues) => {
    setLoading(true)
    try {
      const supabase = await supabaseClient();
      const imageUrls: string[] = [];

      // Upload images sequentially
      for (const image of data.images) {
        const fileName = `${Date.now()}-${image.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('images')
          .upload(fileName, image);

        if (uploadError) {
          throw new Error(`Failed to upload image: ${image.name}`);
        }

        if (uploadData) {
          imageUrls.push(uploadData.fullPath)
        }
      }

      console.log('Uploaded image URLs:', imageUrls);

      // Send data to API
      const response = await fetch('/api/v1/advert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, images: imageUrls }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();

      // Reset form and show success message
      setValue('images', []);
      setImages([]);
      reset();
      setOpen(false);
      toast.success('Başvurunuz alındı');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Başvuru gönderilirken bir hata oluştu');
    } finally {
      setLoading(false)
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger type='button' className='bg-primary text-light px-4 py-2 rounded-md'>
        Sahiplendir
      </DialogTrigger>
      <DialogContent>
        <div className='hidden'>
          <DialogTitle>
            Sahiplendirme Formu
          </DialogTitle>
        </div>
        <div className='flex flex-col gap-4'>
          <DialogHeader>
            <DialogTitle>
              Sahiplendirme Formu
            </DialogTitle>
            <DialogDescription>
              Evcil dostlarınızın sahiplendirilmesi için lütfen aşağıdaki bilgileri doldurunuz.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <Input
                {...register('name')}
                placeholder='Adınız'
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
              <Input
                {...register('email')}
                placeholder='Email'
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className='flex gap-2'>
              <div className='flex flex-col gap-2 w-full'>
                <Input
                  {...register('phone')}
                  placeholder='Telefon'
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>
              <div className='flex flex-col gap-2 w-full'>
              <Select
                {...register('petType')}
                defaultValue='Kedi'
              >
                <SelectTrigger>
                  <SelectValue placeholder='Evcil dostunuzun tipi' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Kedi">Kedi</SelectItem>
                  <SelectItem value="Köpek">Köpek</SelectItem>
                  <SelectItem value="Diğer">Diğer</SelectItem>
                </SelectContent>
              </Select>
                {errors.petType && <p className="text-red-500 text-sm">{errors.petType.message}</p>}
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <Input
                {...register('title')}
                placeholder='Başlık'
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
              <Textarea
                {...register('message')}
                placeholder='Mesaj'
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <div className='flex gap-2 flex-wrap'>
              {images.map((image, index) => (
                <div key={index} className='flex flex-col gap-2 relative'>
                  <Image src={URL.createObjectURL(image)} alt='Evcil dost resmi' width={128} height={128} className='rounded-md aspect-auto'/>
                  <Button type='button' variant='ghost' size='icon' className='dark text-light absolute top-0 right-0' onClick={() => setImages(images.filter((_, i) => i !== index))}>
                    <X size={16} />
                  </Button>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-2 relative'>
              <div className={cn('py-6 cursor-pointer border-2 border-dashed border-gray-500 rounded-md w-full h-full flex items-center justify-center z-0', images.length >= 3 ? 'bg-gray-200' : '')}>
                <p className='text-gray-500'>
                  {images.length >= 3 ? 'Resimler seçildi' : 'Resimleri seç'}
                </p>
              </div>
              <input
                type='file'
                accept='image/*'
                placeholder='Resimler'
                multiple
                onChange={handleImageChange}
                className={cn('absolute border-none border-transparent opacity-0 w-full z-10 h-full', images.length >= 3 ? 'bg-gray-100 hidden' : '')}
              />
              {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
            </div>
            <Button type='submit' disabled={loading}>
              {loading ? 'Gönderiliyor...' : 'Sahiplendir'}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AdoptionForm
