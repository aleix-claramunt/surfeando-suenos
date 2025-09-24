import Navbar from '../components/Navbar'

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar alwaysSolid />
      <div className="bg-gray-50 py-10">
        <main className="max-w-3xl mx-auto py-20 px-4 bg-gray-50">
          <h1 className="text-3xl font-bold mb-8">Aviso legal</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">1. Información general</h2>
              <p className="mb-4">
                En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos de información general de este sitio web:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Denominación social:</strong> Surfeando Sueños</li>
                <li><strong>Responsable:</strong> {process.env.NEXT_PUBLIC_NAME}</li>
                <li><strong>Email:</strong> <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a></li>
                <li><strong>Teléfono:</strong> <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_LINK}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_PHONE}</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">2. Términos y condiciones de uso</h2>
              <p className="mb-4">
                El acceso y uso de este sitio web implica la aceptación expresa y sin reservas de todos los términos y condiciones incluidos en este Aviso Legal.
              </p>
              <p className="mb-4">
                Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de Surfeando Sueños y quedan reservados todos los derechos sobre los mismos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">3. Responsabilidad</h2>
              <p className="mb-4">
                Surfeando Sueños no se hace responsable de los daños y perjuicios que se pudieran derivar de interferencias, omisiones, interrupciones, informáticos, averías telefónicas o desconexiones en el funcionamiento operativo de este sistema electrónico.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">4. Legislación aplicable</h2>
              <p className="mb-4">
                Las presentes condiciones se rigen por la legislación española. Para cualquier litigio que pudiera surgir relacionado con el sitio web o la actividad que en él se desarrolla serán competentes los Juzgados y Tribunales de España.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">5. Contacto</h2>
              <p className="mb-4">
                Para cualquier duda o consulta sobre este aviso legal, puedes contactar con nosotros a través de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a></li>
                <li><strong>Teléfono:</strong> <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_LINK}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_PHONE}</a></li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  )
} 