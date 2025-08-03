import Link from 'next/link'
import Navbar from '../components/Navbar'
import { CheckCircle } from 'lucide-react'

const IncludedItem = ({ text }: { text: string }) => (
  <li className="flex items-start space-x-2">
    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
    <span className="text-gray-800 text-sm">{text}</span>
  </li>
)

const PackageCard = ({
  title,
  duration,
  price,
  features,
  message,
}: {
  title: string
  duration: string
  price: string
  features: string[]
  message: string
}) => (
  <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
    <div>
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">{title}</h3>
      <p className="text-center text-xs text-gray-500 mb-5">{duration}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <IncludedItem key={idx} text={feature} />
        ))}
      </ul>
    </div>
    <div className="text-center">
      <p className="text-xl font-bold text-indigo-600 mb-3">{price}</p>
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_LINK}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full max-w-xs mx-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-2.5 rounded-full shadow-md transition duration-200 text-base"
        aria-label={`Reservar ahora: ${title}`}
      >
        Reservar ahora 📱
      </a>
    </div>
  </div>
)

export default function SoulWavePage() {
  return (
    <>
      <Navbar alwaysSolid />
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center pt-24 pb-10 px-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Paquete Soul Wave
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ideal para quienes buscan{' '}
            <span className="text-indigo-600 font-semibold">equilibrio</span>,{' '}
            <span className="text-indigo-600 font-semibold">conexión</span> y{' '}
            <span className="text-indigo-600 font-semibold">aventura</span> en un solo viaje.
          </p>
        </section>

        {/* Package Cards */}
        <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
          <PackageCard
            title="Pensión Completa / 7 Días"
            duration="Duración: 7 días / 6 noches / 5 días completos de actividad"
            price="Desde 660€"
            features={[
              'Alojamiento en Surf house en habitación doble: opción habitación privada o compartida.',
              'Pensión completa (6 desayunos, 6 comidas, 6 cenas)',
              '5 clases de surf (2h diarias, diferenciación por niveles)',
              '3 clases de Yoga (Hatha o Vinyasa, 1h cada sesión)',
              'Material equipo de surf (tabla y traje de neopreno) & yoga',
              'Wifi disponible en Surf house',
            ]}
            message="¡Hola! Me gustaría reservar un paquete Soul Wave de 7 días. ¿Hablamos?"
          />
          <PackageCard
            title="Pensión Completa / 5 Días"
            duration="Duración: 5 días / 4 noches / 3 días completos de actividad"
            price="Desde 460€"
            features={[
              'Alojamiento en Surf house en habitación doble: opción habitación privada o compartida.',
              'Pensión completa (4 desayunos, 4 comidas, 4 cenas)',
              '3 clases de surf (2h diarias, diferenciación por niveles)',
              '2 clases de Yoga (Hatha y Vinyasa, 1h cada sesión)',
              'Material equipo de surf (tabla y traje de neopreno) & yoga',
              'Wifi disponible en Surf house',
            ]}
            message="¡Hola! Me gustaría reservar un paquete Soul Wave de 5 días. ¿Hablamos?"
          />
        </section>
        <div className="text-center">
          <Link 
            href="/#viajes"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
              ← Volver a los viajes
          </Link>
        </div>
      </main>
    </>
  )
}
