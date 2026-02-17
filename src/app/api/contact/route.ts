import { NextResponse } from 'next/server'

export async function POST() {
  // This endpoint is no longer used - contact form removed from contact page
  // The contact page now displays email and social media links directly
  return NextResponse.json(
    { 
      error: 'This endpoint is deprecated. Please use the contact information on the contact page.',
      message: 'Email: rover.mq@gmail.com'
    }, 
    { status: 410 } // 410 Gone
  )
}