import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompetitionsPage() {
  return (
    <div className="container mx-auto py-24">
      <h1 className="text-4xl font-bold mb-8">Competitions</h1>
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Competition {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

