import { NextResponse } from 'next/server'
import { sql } from "@vercel/postgres"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, tier, amount } = body

    await sql`
      INSERT INTO sponsors (email, tier, amount)
      VALUES (${email}, ${tier}, ${amount})
    `

    return NextResponse.json({ message: 'Sponsorship request received successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing sponsorship request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

