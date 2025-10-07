import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Image from 'next/image'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Surfeando Sueños - Viajes de Surf Auténticos | Surf Trips',
  description: 'Descubre viajes de surf únicos que nacen de un sueño y se viven en el mar. Experiencias auténticas de surf con alojamiento, clases y yoga en destinos increíbles.',
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: ['surf', 'viajes de surf', 'surf trips', 'clases de surf', 'yoga', 'aventura', 'océano', 'vacaciones de surf'],
  authors: [{ name: 'Surfeando Sueños' }],
  creator: 'Surfeando Sueños',
  publisher: 'Surfeando Sueños',
  robots: 'index, follow',
  openGraph: {
    title: 'Surfeando Sueños - Viajes de Surf Auténticos',
    description: 'Viajes de surf que nacen de un sueño, se viven en el mar. Experiencias auténticas con alojamiento, clases y yoga.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Surfeando Sueños',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surfeando Sueños - Viajes de Surf Auténticos',
    description: 'Viajes de surf que nacen de un sueño, se viven en el mar.',
  },
}

export const viewport = 'width=device-width, initial-scale=1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-cream flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_LINK}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
          aria-label="Chatea por WhatsApp"
        >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={28}
          height={28}
          className="w-7 h-7 object-contain bg-transparent hover:bg-transparent"
        />
        </a> 
      </body>
    </html>
  );
}
