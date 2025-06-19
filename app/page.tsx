"use client"

import Image from "next/image";
import { motion } from 'framer-motion'

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
              alt="Surfeando Suenos Logo"
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
            <a href="#viajes" className="bg-coral hover:bg-coral/90 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg inline-block">
              Explora nuestros viajes
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sobre nosotros Section */}
      <section id="sobre-nosotros" className="py-20 px-4 bg-gray-50 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">¡Bienvenido a Surfeando Sueños!</h2>
          <div className="text-center max-w-4xl mx-auto">
            {/* Story Content */}
            <div className="space-y-6">
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
      <section id="viajes" className="py-20 px-4 bg-gray-50 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Viajes</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Semana de Surf en Imsouane */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-300">
              <div className="relative h-64">
                <Image
                  src="/imsouane.jpg"
                  alt="Imsouane surf spot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Semana de Surf en Imsouane</h3>
                <p className="text-gray-800 mb-6 text-lg">
                  Disfruta de una semana completa de surf en uno de los mejores spots de Marruecos. 
                  Olas perfectas para todos los niveles en un ambiente auténtico y relajado.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Alojamiento en riad tradicional</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Clases de surf diarias</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Equipamiento incluido</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Comidas tradicionales</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Transporte desde aeropuerto</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-sm text-gray-600 font-bold">Nivel requerido:</span>
                    <span className="text-black font-bold ml-2">Principiante - Intermedio</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 font-bold">Duración:</span>
                    <span className="text-black font-bold ml-2">7 días</span>
                  </div>
                </div>
                
                <button className="w-full bg-gray-400 text-gray-600 font-bold py-4 px-6 rounded-full shadow-lg text-lg cursor-not-allowed opacity-60" disabled>
                  Más información
                </button>
              </div>
            </div>

            {/* Semana de Surf en Taghazout */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-300">
              <div className="relative h-64">
                <Image
                  src="/taghazout.jpg"
                  alt="Taghazout surf spot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Semana de Surf en Taghazout</h3>
                <p className="text-gray-800 mb-6 text-lg">
                  Explora las famosas olas de Taghazout, el paraíso del surf en Marruecos. 
                  Desde olas suaves para principiantes hasta tubos para expertos.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Alojamiento en surf camp</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Guía local experto</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Acceso a múltiples spots</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Yoga y bienestar</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black font-medium">Cultura local</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-sm text-gray-600 font-bold">Nivel requerido:</span>
                    <span className="text-black font-bold ml-2">Todos los niveles</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 font-bold">Duración:</span>
                    <span className="text-black font-bold ml-2">7 días</span>
                  </div>
                </div>
                
                <button className="w-full bg-gray-400 text-gray-600 font-bold py-4 px-6 rounded-full shadow-lg text-lg cursor-not-allowed opacity-60" disabled>
                  Más información
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials Section (Future) */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Experiencias de nuestros viajeros</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <p className="text-black italic mb-4 font-medium">
                  &quot;Una experiencia increíble. Josep nos llevó a spots que nunca hubiéramos encontrado solos.&quot;
                </p>
                <p className="text-gray-900 font-bold">- Aleix C.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <p className="text-black italic mb-4 font-medium">
                &quot;Más que un viaje de surf, fue una experiencia de vida. Totalmente recomendado.&quot;
                </p>
                <p className="text-gray-900 font-bold">- María L.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <p className="text-black italic mb-4 font-medium">
                &quot;La autenticidad y pasión de Josep se nota en cada detalle del viaje.&quot;
                </p>
                <p className="text-gray-900 font-bold">- Carlos R.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colaboraciones con escuelas Section */}
      <section id="colaboraciones" className="py-20 px-4 bg-gray-50 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Colaboraciones con escuelas</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Propuesta */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Propuesta</h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                En Surfeando Sueños nos especializamos en captar y organizar grupos de surfistas 
                para que las escuelas puedan enfocarse en lo que mejor saben hacer: enseñar surf.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4">¿Qué ofrecemos?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Captación y gestión de grupos internacionales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Organización logística completa</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Marketing y promoción de destinos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Soporte en idiomas (español, inglés, catalán)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Gestión de reservas y pagos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Beneficios */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Beneficios para las Escuelas</h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Mayor Ocupación</h4>
                  </div>
                  <p className="text-gray-800">Aumenta tu ocupación con grupos organizados y garantiza ingresos estables durante todo el año.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Enfoque en la Enseñanza</h4>
                  </div>
                  <p className="text-gray-800">Dedícate exclusivamente a enseñar surf mientras nosotros nos encargamos de la gestión comercial.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Nuevos Mercados</h4>
                  </div>
                  <p className="text-gray-800">Accede a mercados internacionales y diversifica tu base de clientes sin esfuerzo adicional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria"className="py-20 px-4 bg-gray-50 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Galería</h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
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
      <section id="contacto" className="py-20 px-4 bg-gray-50 scroll-mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nombre *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensaje *</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="¿En qué podemos ayudarte?" />
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg text-lg">Enviar</button>
              </form>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h3>
              <ul className="space-y-4 text-lg">
              <li>
                <span className="font-bold text-gray-800">Nombre:</span>
                <span className="text-gray-800"> Josep Noya Corral</span>
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
