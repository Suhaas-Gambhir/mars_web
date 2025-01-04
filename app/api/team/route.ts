import { NextResponse } from 'next/server'
import { sql } from "@vercel/postgres"

export async function GET() {
  try {
    const result = await sql`
      SELECT id, name, role, email, created_at
      FROM team_members
      ORDER BY name ASC
    `
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Error fetching team members:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, role, email } = body

    const result = await sql`
      INSERT INTO team_members (name, role, email, created_at)
      VALUES (${name}, ${role}, ${email}, NOW())
      RETURNING *
    `

    return NextResponse.json({ message: 'Team member added successfully', data: result.rows[0] })
  } catch (error) {
    console.error('Error adding team member:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 