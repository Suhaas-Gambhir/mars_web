import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Toaster } from "@/components/ui/toaster";

// https://chatgpt.com/share/67516010-a960-800c-b32c-8cb282ad290c

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
    url: "https://mars-web.vercel.app/",
    siteName: "MARS",
    images: [
      {
        url: "https://imagedelivery.net/j3_lf_5n8ps_wC1h8l6tfg/669752a1-4ca0-46b3-5fc6-ed37ce6bde00/public",
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
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
