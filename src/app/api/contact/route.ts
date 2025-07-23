import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  // Basic validation
  if (
    typeof name !== 'string' || name.length < 2 ||
    typeof email !== 'string' || !email.match(/^[^@]+@[^@]+\.[^@]+$/) ||
    typeof message !== 'string' || message.length < 5
  ) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const { error } = await supabase
    .from('contact_messages')
    .insert([{ name, email, message }])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}