import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

function isValidEmail(email: string) {
  return /^[^@]+@students\.mq\.edu\.au$/.test(email)
}

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

  // Backend validation
  if (
    typeof first_name !== 'string' || first_name.length < 2 ||
    typeof last_name !== 'string' || last_name.length < 2 ||
    typeof university_email !== 'string' || !isValidEmail(university_email) ||
    typeof student_number !== 'string' || student_number.length < 3 ||
    typeof degree_major !== 'string' || degree_major.length < 2 ||
    typeof current_year !== 'string' || current_year.length < 2 ||
    !Array.isArray(sub_team_interest) || sub_team_interest.length === 0
  ) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

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