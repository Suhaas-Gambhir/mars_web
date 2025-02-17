import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/frosted-glass.css"
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata

export const metadata: Metadata = {
  title: {
    default: "MARS",
    template: "%s | MARS",
  },
  description: "Describes the site, useful for search engine optimization (SEO).",
  openGraph: {
    title: "Macquarie Aerospace Rover Society",
    description:
      "MARS is an exciting, student-led initiative aiming to offer a multi-disciplinary experience. Our mission is to provide hands-on opportunities for students to contribute to the development of an semi-autonomous rover, gearing up to compete in the Australian Rover Challenge in March 2025.",
    url: "https://mqrover.space/",
    siteName: "MARS",
    images: [
      {
        url: "/logo.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "MARS",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <Toaster />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
