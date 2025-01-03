import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecruitmentPage() {
  return (
    <div className="container mx-auto py-24">
      <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {['Engineering', 'Software', 'Design', 'Management'].map((role) => (
            <Card key={role}>
              <CardHeader>
                <CardTitle>{role} Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="w-full">Apply Now</Button>
      </div>
    </div>
  )
}

