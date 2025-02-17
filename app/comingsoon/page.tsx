'use client'

import Image from 'next/image'
import comingSoonGif from '/public/comingsoon.gif'

export default function ComingsoonPage() {
  return (
    <div className="container mx-auto py-24 flex justify-center items-center">
      <Image src={comingSoonGif} alt="Coming Soon" />
    </div>
  )
}