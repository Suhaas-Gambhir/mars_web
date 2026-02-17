import { NextResponse } from 'next/server'

export async function POST() {
  // This endpoint is not yet active - sponsors page shows coming soon
  // Please contact rover.mq@gmail.com for partnership inquiries
  return NextResponse.json(
    { 
      error: 'Sponsorship inquiries should be sent to rover.mq@gmail.com',
      email: 'rover.mq@gmail.com'
    }, 
    { status: 503 } // 503 Service Unavailable
  )
} 