import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surfeando Sueños - Escuela de Surf",
  description: "Learn to surf with a professional instructor. From beginners to advanced surfers, we offer personalized lessons to help you catch the perfect wave.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7 h-7 object-contain bg-transparent hover:bg-transparent"
        />
        </a> 
      </body>
    </html>
  );
}
