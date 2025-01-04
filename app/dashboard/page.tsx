import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { sql } from "@vercel/postgres"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PaginationControls } from "@/components/pagination-controls"
import { Badge } from "@/components/ui/badge"

const DEAL_STATUS_COLORS = {
  pending: "bg-yellow-500",
  in_progress: "bg-blue-500",
  closed: "bg-green-500",
  lost: "bg-red-500",
} as const

async function getStats({
  messagesPage = 1,
  sponsorsPage = 1,
  messagesPageSize = 10,
  sponsorsPageSize = 10,
}: {
  messagesPage?: number
  sponsorsPage?: number
  messagesPageSize?: number
  sponsorsPageSize?: number
}) {
  const sponsorsCount = await sql`SELECT COUNT(*) FROM sponsors`.then(res => res.rows[0].count)
  const totalAmount = await sql`
    SELECT SUM(amount) 
    FROM sponsors 
    WHERE status = 'closed'
  `.then(res => res.rows[0].sum)
  const messagesCount = await sql`SELECT COUNT(*) FROM contact_messages`.then(res => res.rows[0].count)
  const interestCount = await sql`SELECT COUNT(*) FROM team_members`.then(res => res.rows[0].count)
  
  const messagesOffset = (messagesPage - 1) * messagesPageSize
  const sponsorsOffset = (sponsorsPage - 1) * sponsorsPageSize

  const contactMessages = await sql`
    SELECT name, email, message, created_at 
    FROM contact_messages 
    ORDER BY created_at DESC 
    LIMIT ${messagesPageSize} 
    OFFSET ${messagesOffset}
  `.then(res => res.rows)

  const sponsorships = await sql`
    SELECT 
      s.id,
      s.email,
      s.tier,
      s.amount,
      s.status,
      s.notes,
      s.created_at,
      COALESCE(t.name, 'Unassigned') as assigned_to_name
    FROM sponsors s
    LEFT JOIN team_members t ON s.assigned_to = t.id
    ORDER BY s.created_at DESC 
    LIMIT ${sponsorsPageSize} 
    OFFSET ${sponsorsOffset}
  `.then(res => res.rows)

  const expressions = await sql`
    SELECT id, name, role as interest_area, email, created_at
    FROM team_members
    ORDER BY created_at DESC
  `.then(res => res.rows)

  const dealsByStatus = await sql`
    SELECT 
      status,
      COUNT(*) as count,
      SUM(amount) as total_amount
    FROM sponsors
    GROUP BY status
  `.then(res => res.rows)

  return {
    sponsorsCount: Number(sponsorsCount),
    totalAmount: totalAmount || 0,
    messagesCount: Number(messagesCount),
    interestCount: Number(interestCount),
    contactMessages,
    sponsorships,
    expressions,
    dealsByStatus,
  }
}

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const session = await getServerSession()

  if (!session) {
    redirect("/auth/signin")
  }

  const messagesPage = Number(searchParams.messagesPage) || 1
  const sponsorsPage = Number(searchParams.sponsorsPage) || 1
  const messagesPageSize = Number(searchParams.messagesPageSize) || 10
  const sponsorsPageSize = Number(searchParams.sponsorsPageSize) || 10

  const stats = await getStats({
    messagesPage,
    sponsorsPage,
    messagesPageSize,
    sponsorsPageSize,
  })

  const totalMessagesPages = Math.ceil(stats.messagesCount / messagesPageSize)
  const totalSponsorsPages = Math.ceil(stats.sponsorsCount / sponsorsPageSize)

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Total Sponsors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.sponsorsCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Closed Deals Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${stats.totalAmount.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.messagesCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expressions of Interest</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.interestCount}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Deal Pipeline</h2>
          {stats.dealsByStatus.length === 0 ? (
            <Card className="p-6">
              <p className="text-muted-foreground text-center">No deals found in the pipeline.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.dealsByStatus.map((status) => (
                <Card key={status.status}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">
                      <Badge className={DEAL_STATUS_COLORS[status.status as keyof typeof DEAL_STATUS_COLORS]}>
                        {status.status.replace('_', ' ')}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{status.count}</div>
                    <div className="text-sm text-muted-foreground">${Number(status.total_amount).toFixed(2)}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Expressions of Interest</h2>
          {stats.expressions.length === 0 ? (
            <Card className="p-6">
              <p className="text-muted-foreground text-center">No expressions of interest found.</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {stats.expressions.map((expression) => (
                <Card key={expression.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">{expression.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">{expression.interest_area}</div>
                    <div className="text-sm">{expression.email}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Expressed interest on: {new Date(expression.created_at).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Sponsorship Deals</h2>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats.sponsorships.map((sponsor) => (
                  <TableRow key={sponsor.id}>
                    <TableCell>{sponsor.email}</TableCell>
                    <TableCell>{sponsor.tier}</TableCell>
                    <TableCell>${sponsor.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge className={DEAL_STATUS_COLORS[sponsor.status as keyof typeof DEAL_STATUS_COLORS]}>
                        {sponsor.status.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>{sponsor.assigned_to_name}</TableCell>
                    <TableCell>{new Date(sponsor.created_at).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <PaginationControls
            currentPage={sponsorsPage}
            pageSize={sponsorsPageSize}
            totalItems={stats.sponsorsCount}
            totalPages={totalSponsorsPages}
            type="sponsors"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Contact Messages</h2>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats.contactMessages.map((message, index) => (
                  <TableRow key={index}>
                    <TableCell>{message.name}</TableCell>
                    <TableCell>{message.email}</TableCell>
                    <TableCell className="max-w-md truncate">{message.message}</TableCell>
                    <TableCell>{new Date(message.created_at).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <PaginationControls
            currentPage={messagesPage}
            pageSize={messagesPageSize}
            totalItems={stats.messagesCount}
            totalPages={totalMessagesPages}
            type="messages"
          />
        </div>
      </div>
    </div>
  )
}

