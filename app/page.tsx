"use client"

import Image from "next/image";
import { motion } from 'framer-motion'
import { useState } from 'react'

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

      if (!res.ok) throw new Error('Request failed')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nombre *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
          className="w-full px-4 py-3 border-2 border-gray-400 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder-gray-500 shadow-sm transition-colors" 
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          required 
          className="w-full px-4 py-3 border-2 border-gray-400 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder-gray-500 shadow-sm transition-colors" 
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensaje *</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          required 
          className="w-full px-4 py-3 border-2 border-gray-400 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder-gray-500 shadow-sm transition-colors" 
          placeholder="¿En qué podemos ayudarte?" 
        />
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

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
             Surfeando Sueños
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Viajes de surf que nacen de un sueño, se viven en el mar.
            </p>
            <a href="#viajes" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-5 px-10 rounded-full shadow-lg transition duration-200 text-lg">
              Explora nuestros viajes
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sobre nosotros Section */}
      <section id="sobre-nosotros" className="pt-16 pb-8 px-4 bg-gray-50 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">¡Bienvenido a Surfeando Sueños!</h2>
          <div className="text-center max-w-4xl mx-auto">
            {/* Story Content */}
            <div className="space-y-4">
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                A veces, un solo instante puede cambiarlo todo. Para mí, fue aquel día en que, con 20 años, llegué por sorpresa a la Escuela Cántabra de Surf. Desde la primera ola, supe que había encontrado algo que daría sentido a cada día.
                <br></br>
                <br></br>
                El surf no tardó en convertirse en mi obsesión más sana. Cada viaje, cada plan y cada decisión giraban en torno a él. Pasaron los años y entendí que no era solo un deporte: era mi vida.
                <br></br>
                <br></br>
                Así nació Surfeando Sueños, un proyecto que surgió de esa pasión y que hoy se hace realidad. No es solo un negocio, sino la promesa de compartir contigo todo lo que el surf me ha enseñado.
                <br></br>
                <br></br>
                En esta web encontrarás nuestra historia, nuestros servicios, y todo lo que hemos aprendido a lo largo de los años viviendo el surf en primera persona. Ya sea que estés buscando clases de surf, experiencias en la costa o una comunidad conectada por el mar, aquí tienes un punto de partida.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-ocean-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Pasión</h4>
                  <p className="text-gray-700">Amor profundo por el surf y el océano</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-ocean-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Autenticidad</h4>
                  <p className="text-gray-700">Experiencias reales y genuinas</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-ocean-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Conexión</h4>
                  <p className="text-gray-700">Vínculo profundo con el mar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viajes Section */}
      <section id="viajes" className="pt-8 pb-8 px-4 bg-gray-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Viajes</h2>
          
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
                  Diseñado para surfistas independientes que valoran el bienestar y la comunidad
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
      <section id="galeria"className="pt-8 pb-8 px-4 bg-gray-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">Galería</h2>
          <p className="text-center text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Descubre algunos de los mejores momentos y paisajes de nuestros últimos viajes de surf.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image src="/gallery1.jpg" alt="Surf en Imsouane" width={400} height={256} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image src="/gallery2.jpg" alt="Grupo en la playa" width={400} height={256} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image src="/gallery3.jpg" alt="Atardecer en  " width={400} height={256} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image src="/gallery4.jpg" alt="Surfistas en acción" width={400} height={256} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image src="/gallery5.jpg" alt="Ambiente de viaje" width={400} height={256} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image src="/gallery6.jpg" alt="Olas perfectas" width={400} height={256} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

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
                <li><span className="font-bold text-gray-800">Teléfono:</span> <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_LINK}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_PHONE}</a></li>
                <li><span className="font-bold text-gray-800">Instagram:</span> <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
