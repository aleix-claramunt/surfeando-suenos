"use client"

import Image from "next/image";
import { motion } from 'framer-motion'
import { useState } from 'react'
import React from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`)
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')

      // Auto-hide error message after 8 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 8000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
          Nombre *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby="name-help"
          autoComplete="name"
          className="w-full px-4 py-3 border-2 border-gray-400 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder-gray-500 shadow-sm transition-colors hover:border-gray-500"
          placeholder="Tu nombre completo"
        />
        <div id="name-help" className="sr-only">Campo obligatorio para tu nombre</div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby="email-help"
          autoComplete="email"
          className="w-full px-4 py-3 border-2 border-gray-400 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder-gray-500 shadow-sm transition-colors hover:border-gray-500"
          placeholder="tu@email.com"
        />
        <div id="email-help" className="sr-only">Campo obligatorio para tu dirección de correo electrónico</div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby="message-help"
          className="w-full px-4 py-3 border-2 border-gray-400 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder-gray-500 shadow-sm transition-colors hover:border-gray-500 resize-vertical"
          placeholder="¿En qué podemos ayudarte? Cuéntanos sobre tu experiencia ideal de surf..."
        />
        <div id="message-help" className="sr-only">Campo obligatorio para tu mensaje</div>
      </div>
      
      {submitStatus === 'success' && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          <span>¡Mensaje enviado!</span>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</span>
        </div>
      )}
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-200"
      >
        {isSubmitting && (
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
        )}
        {isSubmitting ? 'Enviando...' : 'Enviar 📧'}
      </button>
    </form>
  )
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  const galleryImages = [
    { src: '/gallery4.jpg', alt: 'Surfistas en acción cabalgando las olas perfectas' },
    { src: '/gallery5.jpg', alt: 'Ambiente relajado del viaje con compañeros de surf' },
    { src: '/gallery6.jpg', alt: 'Olas perfectas formándose en el océano azul cristalino' },
    { src: '/gallery7.jpg', alt: 'Atardecer mágico en la costa de Imsouane' },
    { src: '/gallery8.jpg', alt: 'Grupo de surfistas compartiendo experiencias' },
    { src: '/gallery9.jpg', alt: 'Vista panorámica de las olas desde la playa' },
    /*{ src: '/gallery10.jpg', alt: 'La perfecta formación de las olas en Imsouane' },*/
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
    setImageLoaded(false)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
      setImageLoaded(false)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
      setImageLoaded(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <section id="galeria" className="pt-8 pb-8 px-4 bg-gray-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">Galería</h2>
          <p className="text-center text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Descubre algunos de los mejores momentos y paisajes de nuestros últimos viajes de surf.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for larger image view */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              aria-label="Cerrar galería"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 transition-colors z-10"
              aria-label="Imagen anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 transition-colors z-10"
              aria-label="Siguiente imagen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative w-full h-full flex items-center justify-center">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className={`object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoadingComplete={() => setImageLoaded(true)}
                sizes="100vw"
              />
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Surfeando Sueños',
    description: 'Viajes de surf auténticos que nacen de un sueño, se viven en el mar. Experiencias únicas de surf con alojamiento, clases y yoga.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://surfeandosuenos.com',
    telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES'
    },
    sameAs: [
      process.env.NEXT_PUBLIC_INSTAGRAM_URL
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Full Experience: Soul Wave',
        description: 'Ideal para quienes buscan equilibrio, conexión y aventura en un solo viaje.',
        category: 'Viaje de Surf Completo'
      },
      {
        '@type': 'Offer',
        name: 'Easy Flow',
        description: 'Perfecto para quienes buscan flexibilidad y confort sin perder la esencia del surf trip.',
        category: 'Viaje de Surf Flexible'
      },
      {
        '@type': 'Offer',
        name: 'Free Spirit',
        description: 'Diseñado para surfistas independientes que valoran el bienestar y la comunidad.',
        category: 'Viaje de Surf Independiente'
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center" aria-label="Sección principal">
        <div className="absolute inset-0 z-0">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/hero-bg.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
            {/* Fallback image if video doesn't  load */}
            <Image
              src="/hero-bg.jpg"
              alt="Surfing waves"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-ocean/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/logo.png"
              alt="Surfeando Suenos"
              width={200}
              height={200}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
             Surfeando Sueños
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Viajes de surf que nacen de un sueño, se viven en el mar.
            </p>
            <a
              href="#experiencias"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg transform hover:-translate-y-1"
              aria-label="Explorar nuestros viajes de surf"
            >
              Vive la aventura
            </a>
          </motion.div>
        </div>
      </section>

      {/* Nuestro destino: Imsouane Section */}
      <section
        id="nuestro-destino"
        className="pt-8 pb-8 px-4 bg-gray-50 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-4 tracking-tight">
            Nuestro destino: Imsouane
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto leading-relaxed">
            Entre olas infinitas, historia bereber y alma atlántica.
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image Section */}
            <div className="relative h-[26rem] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200/40">
              <Image
                src="/gallery0.jpg"
                alt="Vista panorámica de Imsouane con sus olas perfectas"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-md p-8 border border-gray-100">
              <p className="text-gray-800 leading-relaxed">
                Bienvenido a <b>Imsouane</b>, un pequeño pueblo de pescadores en la costa atlántica de Marruecos que se ha convertido en un <b>paraíso para surfistas de todo el mundo</b>. Rodeado de montañas y bañado por una de las <b>olas más largas de África</b>, Imsouane es mucho más que un spot de surf: es un lugar donde el tiempo parece detenerse.
                <br /><br />
                Con raíces <b>bereberes ancestrales</b>, su puerto pesquero aún conserva la esencia de lo auténtico:
                <br /><br />
                Cada tarde, los pescadores regresan tras su jornada, mientras el sol cae sobre el océano
                <br /><br />
                Su magia reside en la combinación perfecta entre <b>naturaleza virgen</b>, <b>vida local tranquila</b> y una comunidad de surf <b>abierta</b> y <b>multicultural</b>.
                <br /><br />
                Ya sea que busques surfear, desconectar o reconectar, Imsouane te espera con los brazos abiertos… y con olas que no querrás soltar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencias Section */}
      <section id="experiencias" className="pt-8 pb-8 px-4 bg-gray-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Experiencias</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Full Experience: Soul Wave */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-300">
              <div className="relative h-64">
                <Image
                  src="/gallery1.jpg"
                  alt="Soul Wave Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">Full Experience: Soul Wave</h3>
                <p className="text-gray-800 mb-4 text-sm">
                  Ideal para quienes buscan equilibrio, conexión y aventura en un solo viaje.
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Alojamiento en Surf house</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Pensión completa</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Clases de surf</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Clases de yoga</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Material incluido</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-xs text-gray-600 font-bold">Duración:</span>
                    <span className="text-black font-bold ml-1 text-sm">5-7 días</span>
                  </div>
                </div>
                <a href="/soul-wave" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-200 inline-block text-center">
                  Más información
                </a>
              </div>
            </div>

            {/* Easy Flow */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-300">
              <div className="relative h-64">
                <Image
                  src="/gallery2.jpg"
                  alt="Easy Flow Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">Easy Flow</h3>
                <p className="text-gray-800 mb-4 text-sm">
                  Perfecto para quienes buscan flexibilidad y confort sin perder la esencia del surf trip.
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Alojamiento en Surf house</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Desayuno incluido</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Clases de surf</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Clases de yoga</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Material Incluido</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-xs text-gray-600 font-bold">Duración:</span>
                    <span className="text-black font-bold ml-1 text-sm">5-7 días</span>
                  </div>
                </div>
                
                <a href="/easy-flow" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-200 inline-block text-center">
                  Más información
                </a>
              </div>
            </div>

            {/* Free Spirit */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-300">
              <div className="relative h-64">
                <Image
                  src="/gallery3.jpg"
                  alt="Free Spirit Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">Free Spirit</h3>
                <p className="text-gray-800 mb-4 text-sm">
                  Diseñado para surfistas independientes que valoran el bienestar y la comunidad.
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Alojamiento en Surf house</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Pensión completa</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Clases de yoga</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium text-sm">Material incluido</span>
                  </div>
                </div>
                <div className="mt-12"></div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-xs text-gray-600 font-bold">Duración:</span>
                    <span className="text-black font-bold ml-1 text-sm">5-7 días</span>
                  </div>
                </div>
                <a href="/free-spirit" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-200 inline-block text-center">
                  Más información
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <GallerySection />

      {/* Contacto Section */}
      <section id="contacto" className="pt-8 pb-8 px-4 bg-gray-50 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
              <ContactForm />
            </div>
            {/* Contact Info */}
            <div className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h3>
              <ul className="space-y-4 text-lg">
              <li>
                <span className="font-bold text-gray-800">Nombre:</span>
                <span className="text-gray-800"> {process.env.NEXT_PUBLIC_NAME}</span>
              </li>               
                <li><span className="font-bold text-gray-800">Email:</span> <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a></li>
                <li><span className="font-bold text-gray-800">Instagram:</span> <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
