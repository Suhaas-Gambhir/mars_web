import "./globals.css"
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { UpcomingEventsBanner } from "@/components/features/upcoming-events-banner"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "MARS | Macquarie Aerospace Rover Society",
    template: "%s | MARS"
  },
  description: "Official website of the Macquarie Aerospace Rover Society (MARS). Explore events, projects, and join our community.",
  keywords: ["MARS", "Rover", "Macquarie", "Aerospace", "Robotics", "Student Society"],
  authors: [{ name: "MARS Team", url: "https://mars.mqrover.space" }],
  openGraph: {
    title: "MARS | Macquarie Aerospace Rover Society",
    description: "Official website of the Macquarie Aerospace Rover Society (MARS).",
    url: "https://mars.mqrover.space",
    siteName: "MARS",
    images: [
      {
        url: "https://www.mqrover.space/mars-image.png",
        width: 512,
        height: 512,
        alt: "MARS Logo"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <div className="min-h-screen bg-background">
            <UpcomingEventsBanner />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
