import { executeSql } from '@/utils/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { sql, params = [] } = await request.json()
    const result = await executeSql(sql, params)
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An error occurred' },
      { status: 500 }
    )
  }
} 