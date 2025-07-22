import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function POST(req: Request) {
  const {
    first_name,
    last_name,
    university_email,
    student_number,
    degree_major,
    current_year,
    sub_team_interest,
    sub_team_interest_other,
    experience
  } = await req.json()

  const { error } = await supabase
    .from('eoi_submissions')
    .insert([
      {
        first_name,
        last_name,
        university_email,
        student_number,
        degree_major,
        current_year,
        sub_team_interest,
        sub_team_interest_other,
        experience
      }
    ])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
} 