"use client"

import React, { useEffect, useState } from 'react'
import { deleteAdvert, getAdverts, approveAdvert } from '@/utils/supabaseRequests'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table'
import { useAuth } from '@clerk/nextjs'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Check, Eye, RefreshCcw, Trash2 } from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

const URL = "https://ftvzmjhulohohammuanz.supabase.co/storage/v1/object/public/"

function AdoptionPage() {
  const {getToken, isLoaded} = useAuth()
  const [adverts, setAdverts] = useState<any[]>([])
  const [mode, setMode] = useState<'pending' | 'approved'>('pending')

  useEffect(() => {
    if (!isLoaded) return

    const GetAdvertsFromSupabase = async () => {
      const adverts = await getAdverts({all: true})
      setAdverts(adverts) 
    }

    GetAdvertsFromSupabase()
  }, [isLoaded])

  const handleDelete = (id: string) => {
    const DeleteAdvertFromSupabase = async () => {
      const token = await getToken({template: 'supabase'})
      if (!token) return

      await deleteAdvert({token, id})
      toast.success('Başarıyla silindi')
      setAdverts(prevAdverts => prevAdverts.filter(advert => advert.id !== id))
    }
    DeleteAdvertFromSupabase()
  }

  const handleApprove = (id: string) => {
    const ApproveAdvertFromSupabase = async () => {
      const token = await getToken({template: 'supabase'})
      if (!token) return

      await approveAdvert({token, id})

      toast.success('Başarıyla onaylandı')
      setAdverts(prevAdverts => prevAdverts.map(advert => 
        advert.id === id ? { ...advert, status: true } : advert
      ))
    }
    ApproveAdvertFromSupabase()
  }

  return (
    <div className='w-full flex'>
      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col mt-24'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6'>
          <p className='text-xl sm:text-2xl font-bold mb-4 sm:mb-0'>Sahiplendirme</p>
          <Button variant='secondary' onClick={() => setMode(mode === 'pending' ? 'approved' : 'pending')} className='flex gap-2 w-full sm:w-auto'>
            <RefreshCcw /> 
            <span className='hidden sm:inline'>{mode === 'pending' ? 'Onaylananlar' : 'Onaylanmamışlar'}</span>
            <span className='sm:hidden'>{mode === 'pending' ? 'Onaylı' : 'Onaysız'}</span>
          </Button>
        </div>
        <div className='overflow-x-auto'>
          <Table className='min-w-full'>
            <TableHeader>
              <TableRow>
                <TableHead className='px-2 sm:px-4'>Ad</TableHead>
                <TableHead className='px-2 sm:px-4 hidden sm:table-cell'>Email</TableHead>
                <TableHead className='px-2 sm:px-4 hidden md:table-cell'>Telefon</TableHead>
                <TableHead className='px-2 sm:px-4 hidden lg:table-cell'>Mesaj</TableHead>
                <TableHead className='px-2 sm:px-4'>Hayvan</TableHead>
                <TableHead className='px-2 sm:px-4'>Resim</TableHead>
                <TableHead className='px-2 sm:px-4'>İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adverts.filter((advert) => advert.status === (mode === 'approved' ? true : false)).map((advert) => (
                <TableRow key={advert.id}>
                  <TableCell className='px-2 sm:px-4'>{advert.name}</TableCell>
                  <TableCell className='px-2 sm:px-4 hidden sm:table-cell'>{advert.email}</TableCell>
                  <TableCell className='px-2 sm:px-4 hidden md:table-cell'>{advert.phone}</TableCell>
                  <TableCell className='px-2 sm:px-4 hidden lg:table-cell max-w-xs'>{advert.message}</TableCell>
                  <TableCell className='px-2 sm:px-4'>{advert.category}</TableCell>
                  <TableCell className='px-2 sm:px-4'>
                    <Image src={URL + advert.images[0]} alt={advert.name} width={50} height={50} className='w-12 h-12 sm:w-16 sm:h-16 object-cover' />
                  </TableCell>
                  <TableCell className='px-2 sm:px-4 space-y-2 sm:space-y-0 sm:space-x-2'>
                    <Button variant='destructive' size='icon' onClick={() => handleDelete(advert.id)} className='w-8 h-8 sm:w-10 sm:h-10'>
                      <Trash2 className='w-4 h-4 sm:w-5 sm:h-5'/>
                    </Button>
                    <Button variant='outline' size='icon' className='w-8 h-8 sm:w-10 sm:h-10'>
                      <Link href={`/sahiplendirme/${advert.id}`}>
                        <Eye className='w-4 h-4 sm:w-5 sm:h-5' />
                      </Link>
                    </Button>
                    {mode === 'pending' && (
                      <Button className='bg-green-500 hover:bg-green-600 w-8 h-8 sm:w-10 sm:h-10' variant='outline' size='icon' onClick={() => handleApprove(advert.id)}>
                        <Check className='w-4 h-4 sm:w-5 sm:h-5' />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default AdoptionPage
