import { NextResponse } from 'next/server'
import { sql } from "@vercel/postgres"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const assignedTo = searchParams.get('assignedTo')

    let query = `
      SELECT 
        s.id,
        s.email,
        s.tier,
        s.amount,
        s.status,
        s.assigned_to,
        s.notes,
        s.created_at,
        s.updated_at,
        COALESCE(t.name, 'Unassigned') as team_member_name
      FROM sponsors s
      LEFT JOIN team_members t ON s.assigned_to = t.id
      WHERE 1=1
    `
    const params: any[] = []

    if (status) {
      params.push(status)
      query += ` AND s.status = $${params.length}`
    }

    if (assignedTo) {
      params.push(assignedTo)
      query += ` AND s.assigned_to = $${params.length}`
    }

    query += ` ORDER BY s.created_at DESC`

    const result = await sql.query(query, params)
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Error fetching sponsorships:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, tier, amount, assignedTo, notes } = body

    const result = await sql`
      INSERT INTO sponsors (
        email, 
        tier, 
        amount, 
        status,
        assigned_to,
        notes,
        created_at,
        updated_at
      )
      VALUES (
        ${email}, 
        ${tier}, 
        ${amount}, 
        'pending',
        ${assignedTo || null},
        ${notes || ''},
        NOW(),
        NOW()
      )
      RETURNING *
    `

    return NextResponse.json({ message: 'Sponsorship request received successfully', data: result.rows[0] }, { status: 200 })
  } catch (error) {
    console.error('Error processing sponsorship request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, status, assignedTo, notes } = body

    const result = await sql`
      UPDATE sponsors
      SET 
        status = COALESCE(${status}, status),
        assigned_to = COALESCE(${assignedTo}, assigned_to),
        notes = COALESCE(${notes}, notes),
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Sponsorship not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Sponsorship updated successfully', data: result.rows[0] })
  } catch (error) {
    console.error('Error updating sponsorship:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

