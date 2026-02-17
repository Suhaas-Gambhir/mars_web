import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <div className="container mt-5">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
            Get in touch with us. We&apos;d love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Email</CardTitle>
                  <CardDescription className="text-foreground/70">Send us an email</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:rover.mq@gmail.com" 
                className="text-lg font-semibold text-primary hover:underline break-all"
              >
                rover.mq@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Instagram Card */}
          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Instagram</CardTitle>
                  <CardDescription className="text-foreground/70">Follow us on Instagram</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full font-semibold border-2">
                <a 
                  href="https://www.instagram.com/mq_rover/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  @mq_rover
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn Card */}
          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">LinkedIn</CardTitle>
                  <CardDescription className="text-foreground/70">Connect with us professionally</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full font-semibold border-2">
                <a 
                  href="https://www.linkedin.com/company/macquarie-aerospace-rover-society/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View LinkedIn Page
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <Card className="bg-muted/80 border-2">
            <CardContent className="pt-6 pb-6">
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-foreground/80 font-medium">
                We typically respond to emails within 2-3 business days. For urgent matters, please reach out via our social media channels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 