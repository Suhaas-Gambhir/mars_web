'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Define a type for the SQL result
interface SqlResult {
  message?: string
  error?: string
  details?: string
  result?: Record<string, unknown>[]
  rowCount?: number | null
}

export default function SqlAdminPage() {
  const [mounted, setMounted] = useState(false)
  const [sql, setSql] = useState('')
  const [result, setResult] = useState<SqlResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleExecute = async () => {
    try {
      setError(null)
      const response = await fetch('/api/sql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sql }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to execute SQL')
      }
      
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  const renderTable = (data: Record<string, unknown>[]) => {
    if (!data || data.length === 0) return null
    
    const columns = Object.keys(data[0])
    
    return (
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={`${rowIndex}-${column}`}>
                  {JSON.stringify(row[column])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto py-24">
      <h1 className="text-2xl font-bold mb-4">SQL Admin</h1>
      
      <div className="space-y-4">
        <Textarea
          value={sql}
          onChange={(e) => setSql(e.target.value)}
          placeholder="Enter SQL command..."
          className="h-32"
        />
        
        <Button onClick={handleExecute}>Execute</Button>

        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {result && (
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded">
              <p className="font-semibold">Rows affected: {result.rowCount}</p>
            </div>
            
            {result.result && result.result.length > 0 && (
              <div className="rounded border">
                {renderTable(result.result)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 