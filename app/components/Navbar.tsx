"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({ alwaysSolid = false }: { alwaysSolid?: boolean } = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (alwaysSolid) {
      setIsScrolled(true)
      return
    }
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      setIsScrolled(scrollPosition > heroHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [alwaysSolid])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-blue-900 border-b border-blue-700 shadow-lg' 
        : 'bg-transparent'
    }`} style={isScrolled ? {backgroundColor: '#1e3a8a'} : {}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Surfeando Sueños Logo"
              width={50}
              height={50}
              className="w-auto h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="#sobre-nosotros">Sobre nosotros</NavLink>
            <NavLink href="#viajes">Viajes</NavLink>
            <NavLink href="#colaboraciones">Colaboraciones</NavLink>
            <NavLink href="#galeria">Galería</NavLink>
            <Link href="#contacto" className="bg-coral hover:bg-coral/90 text-white px-6 py-2 rounded-full transition-colors shadow-md font-semibold">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-ocean-900 absolute left-0 right-0 p-4 shadow-lg border-b border-ocean-700">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </MobileNavLink>
              <MobileNavLink href="#sobre-nosotros" onClick={() => setIsMenuOpen(false)}>
                Sobre Nosotros
              </MobileNavLink>
              <MobileNavLink href="#viajes" onClick={() => setIsMenuOpen(false)}>
                Viajes
              </MobileNavLink>
              <MobileNavLink href="#colaboraciones" onClick={() => setIsMenuOpen(false)}>
                Colaboraciones
              </MobileNavLink>
              <MobileNavLink href="#galeria" onClick={() => setIsMenuOpen(false)}>
                Galería
              </MobileNavLink>
              <Link href="#contacto" onClick={() => setIsMenuOpen(false)} className="bg-coral hover:bg-coral/90 text-white px-6 py-2 rounded-full transition-colors w-full shadow-md font-semibold text-center block">
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-coral transition-colors font-semibold text-lg"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white hover:text-coral transition-colors block py-2 font-semibold text-lg"
    >
      {children}
    </Link>
  )
} 