import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { sql } from "@vercel/postgres"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

async function getStats() {
  const sponsorsCount = await sql`SELECT COUNT(*) FROM sponsors`.then(res => res.rows[0].count)
  const totalAmount = await sql`SELECT SUM(amount) FROM sponsors`.then(res => res.rows[0].sum)
  const messagesCount = await sql`SELECT COUNT(*) FROM contact_messages`.then(res => res.rows[0].count)

  return {
    sponsorsCount,
    totalAmount: totalAmount || 0,
    messagesCount,
  }
}

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect("/auth/signin")
  }

  const stats = await getStats()

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <CardTitle>Total Amount Raised</CardTitle>
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
      </div>
    </div>
  )
}

