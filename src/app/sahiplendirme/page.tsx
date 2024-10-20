"use client"

import React, { useState, useEffect } from 'react'
import { getAdverts } from '@/utils/supabaseRequests'
import AdvertCard from '@/components/ui/AdvertCard'
import Link from 'next/link'
import { Button } from "@/components/ui/Button"

function Sahiplendirme() {
  const [adverts, setAdverts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const limit = 10

  useEffect(() => {
    fetchAdverts()
  }, [])

  const fetchAdverts = async () => {
    if (!hasMore) return
    setLoading(true)
    try {
      const newAdverts = await getAdverts({ limit, page })
      if (newAdverts.length < limit) {
        setHasMore(false)
      }
      setAdverts(prevAdverts => [...prevAdverts, ...newAdverts])
      setPage(prevPage => prevPage + 1)
    } finally {
      setLoading(false)
    }
  } // Add this closing brace

  const handleLoadMore = () => {
    fetchAdverts()
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Sahiplendirme İlanları</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {adverts.map((advert: any) => (
          <Link href={`/sahiplendirme/${advert.id}`} key={advert.id}>
            <AdvertCard advert={advert} />
          </Link>
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 text-center">
          <Button variant="outline" onClick={handleLoadMore} disabled={loading}>
            {loading ? 'Yükleniyor...' : 'Daha Fazla Göster'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default Sahiplendirme
