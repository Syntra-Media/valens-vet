import { PawPrint, PencilLine } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function AdminPage() {
  return (
    <div
      className={"flex w-full h-screen"}
    >
      <div className='flex w-full my-24 mx-12 gap-12'>
        <Link href={"/admin/adoption"} className='flex flex-col gap-4 w-full h-full items-center justify-center rounded-md bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 text-light'>
          <PawPrint className='w-12 h-12' />
          <p className='text-2xl font-bold'>
            Sahiplendirme
          </p>
        </Link>
        <Link href={"/admin/blog"} className='flex flex-col gap-4 w-full h-full items-center justify-center rounded-md bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 text-light'>
          <PencilLine className='w-12 h-12' />
          <p className='text-2xl font-bold'>
            Blog
          </p>
        </Link>
      </div>
    </div>
  )
}

export default AdminPage