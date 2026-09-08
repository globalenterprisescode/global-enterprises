'use client';

import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import WhatsAppButton from '@/src/components/WhatsAppButton';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isLandingPage = pathname?.startsWith('/landingpages/');

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLandingPage ? children : (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        )}
      </body>
    </html>
  )
}