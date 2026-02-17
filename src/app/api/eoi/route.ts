import { NextResponse } from 'next/server'

export async function POST() {
  // This endpoint is no longer used - EOI form now handled via Google Forms
  // The join page now embeds a Google Form directly
  return NextResponse.json(
    { 
      error: 'This endpoint is deprecated. Please use the Google Form on the join page.',
      redirect: '/join'
    }, 
    { status: 410 } // 410 Gone
  )
} 