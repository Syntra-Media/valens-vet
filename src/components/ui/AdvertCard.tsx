import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

const URL = "https://ftvzmjhulohohammuanz.supabase.co/storage/v1/object/public/"

const CategoryColors = {
  "Kedi": "bg-purple-400",
  "Köpek": "bg-yellow-400",
  "Diğer": "bg-gray-400"
}

function AdvertCard({ advert }: { advert: any }) {
  return (
    <Card className="bg-orange-50 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-xs">
      <CardHeader className="p-4">
        <Badge className={`${CategoryColors[advert.category as keyof typeof CategoryColors]} text-foreground w-max px-2 py-1 text-xs rounded-full`}>
          {advert.category}
        </Badge>
        <CardTitle className="text-base font-semibold mt-2 truncate">{advert.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {advert.images && advert.images.length > 0 ? (
          <Image
            src={URL + advert.images[0]}
            alt={`${advert.title} - Fotoğraf`}
            width={160}
            height={120}
            className="rounded-md object-cover w-full h-28"
          />
        ) : (
          <div className="h-28 w-full bg-gray-100 flex items-center justify-center rounded-md">
            <span className="text-gray-400 text-sm">Resim Yok</span>
          </div>
        )}
        <p className="mt-3 text-xs text-gray-600 line-clamp-2">{advert.message}</p>
      </CardContent>
    </Card>
  )
}

export default AdvertCard
