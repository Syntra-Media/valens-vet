"use client";

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { getAdverts } from '@/utils/supabaseRequests';
import AdoptionForm from '../AdoptionForm';
import AdvertCard from '../AdvertCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../Carousel';
import Link from 'next/link';

function Adoption() {
  const [adverts, setAdverts] = useState<any[]>([])

  useEffect(() => {
    const GetAdvertsFromSupabase = async () => {
      const adverts = await getAdverts({limit: 10})
      setAdverts(adverts)
    }

    GetAdvertsFromSupabase()
  }, [])

  return (
    <div className="w-full flex">
      <motion.div className="w-full h-full flex flex-col lg:flex-row mx-8 my-36 gap-12 lg:mx-36 2xl:mx-48 3xl:mx-64 4k:mx-[50rem] 4k:my-24 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
        viewport={{once: true}}
        id="contact"
      >
        <div className="flex flex-col w-full h-full gap-6">
          <div className="flex flex-col gap-2 4k:gap-4">
            <p className="text-button uppercase font-medium 4k:text-2xl">
              Sahiplendirme
            </p>
            <p className="font-medium text-3xl 4k:text-6xl">
              Evcil dostlarınızın sahiplendirilmesi için!
            </p>
          </div>
          <div className="w-full relative">
            <Carousel className="w-full">
              <div className="overflow-hidden">
                <CarouselContent className="">
                  {adverts.map((advert, index) => (
                    <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="">
                        <Link href={`/sahiplendirme/${advert.id}`}>
                          <AdvertCard advert={advert} />
                        </Link>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
              <CarouselNext className='relative -bottom-6'/>
              <CarouselPrevious className='relative -bottom-6 -left-6'/>
            </Carousel>
          </div>
          <div className="flex w-full h-full justify-between">
            <AdoptionForm />
            <Link href="/sahiplendirme" className='text-foreground/60 font-medium 4k:text-2xl'>
              Daha fazla gör
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Adoption
