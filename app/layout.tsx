import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "SlickCarWash - Premium Mobile Car Wash Service",
  description:
    "We wash your car wherever you are. Premium mobile car wash service - we come to your home, office, or parking lot.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
