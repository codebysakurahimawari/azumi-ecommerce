import "./globals.css"
import { Kumbh_Sans } from "next/font/google"
import type { Metadata } from "next"
import Navbar from "@/components/organisms/root-layout/navbar"
import Footer from "@/components/organisms/root-layout/footer"

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kumbh",
})

export const metadata: Metadata = {
  title: "Azumi - Women's Wear",
  description: "Discover elegant and modern women's fashion collections.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={kumbh.variable}>
      <body className="bg-white text-[#181818] min-h-screen flex flex-col">
        
        {/* Navbar will go here */}
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>

        {/* Footer will go here */}
        <Footer />

      </body>
    </html>
  )
}