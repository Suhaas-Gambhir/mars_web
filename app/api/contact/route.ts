import { NextResponse } from 'next/server'
import { sql } from "@vercel/postgres"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    await sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `

    return NextResponse.json({ message: 'Contact form submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form submission:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

