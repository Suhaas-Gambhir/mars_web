import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

function isValidEmail(email: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
}

export async function POST(req: Request) {
  const { name, email, company, message, selected_tier } = await req.json()

  // Backend validation
  if (
    typeof name !== 'string' || name.length < 2 ||
    typeof email !== 'string' || !isValidEmail(email) ||
    typeof company !== 'string' || company.length < 2 ||
    typeof message !== 'string' || message.length < 5
  ) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const { error } = await supabase
    .from('sponsor_inquiries')
    .insert([
      {
        name,
        email,
        company,
        message,
        selected_tier: selected_tier || null
      }
    ])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
} 