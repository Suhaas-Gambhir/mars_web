'use client'

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const PAGE_SIZE_OPTIONS = [5, 10, 25, 50]

interface PaginationControlsProps {
  currentPage: number
  pageSize: number
  totalItems: number
  totalPages: number
  type: 'messages' | 'sponsors'
}

export function PaginationControls({
  currentPage,
  pageSize,
  totalItems,
  totalPages,
  type,
}: PaginationControlsProps) {
  const handlePageSizeChange = (value: string) => {
    const url = new URL(window.location.href)
    url.searchParams.set(`${type}PageSize`, value)
    url.searchParams.set(`${type}Page`, '1')
    window.location.href = url.toString()
  }

  const handlePageChange = (newPage: number) => {
    const url = new URL(window.location.href)
    url.searchParams.set(`${type}Page`, String(newPage))
    window.location.href = url.toString()
  }

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-4">
        <div className="text-sm text-muted-foreground">
          Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, totalItems)} of {totalItems} entries
        </div>
        <Select
          defaultValue={String(pageSize)}
          onValueChange={handlePageSizeChange}
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {PAGE_SIZE_OPTIONS.map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size} rows
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          disabled={currentPage >= totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
} 