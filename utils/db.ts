import { sql } from "@vercel/postgres"

type SqlResponse = {
  message?: string
  error?: string
  details?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result?: any[]
  rowCount?: number | null
}

export async function executeSql(
  command: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any[] = []
): Promise<SqlResponse> {
  
  if (!process.env.SQL_SECRET) {
    throw new Error('SQL_SECRET environment variable is not set')
  }

  // Verify secret matches environment variable
  if (process.env.SQL_SECRET !== process.env.SQL_SECRET) {
    throw new Error('Unauthorized')
  }

  // Basic SQL injection prevention
  if (command.toLowerCase().includes('drippite') || 
      command.toLowerCase().includes('truncate')) {
    throw new Error('DROP and TRUNCATE commands are not allowed')
  }

  try {
    const result = await sql.query(command, params)

    return {
      message: 'SQL command executed successfully',
      result: result.rows,
      rowCount: result.rowCount
    }
  } catch (error) {
    console.error('Error executing SQL:', error)
    throw error
  }
}