import Navbar from '../components/Navbar'

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Navbar alwaysSolid />
      <div className="bg-gray-50 py-10">
        <main className="max-w-3xl mx-auto py-20 px-4 bg-gray-50">
          <h1 className="text-3xl font-bold mb-8">Política de privacidad</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">1. Información del responsable del tratamiento</h2>
              <p className="mb-4">
                En cumplimiento del deber de información dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas (RGPD), se facilitan a continuación los siguientes datos de información general de este sitio web:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Responsable del tratamiento:</strong> ${process.env.NEXT_PUBLIC_NAME}</li>
                <li><strong>Denominación comercial:</strong> Surfeando Sueños</li>
                <li><strong>Email:</strong> <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a></li>
                <li><strong>Teléfono:</strong> <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_LINK}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_PHONE}</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">2. Finalidad del tratamiento de datos</h2>
              <p className="mb-4">
                Los datos personales que nos facilite serán utilizados para las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestionar las consultas y solicitudes de información sobre nuestros servicios de surf</li>
                <li>Procesar reservas y gestionar viajes de surf</li>
                <li>Enviar comunicaciones comerciales sobre nuestros servicios (solo con consentimiento expreso)</li>
                <li>Cumplir con las obligaciones legales aplicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">3. Base legal para el tratamiento</h2>
              <p className="mb-4">
                El tratamiento de sus datos se realiza con las siguientes bases jurídicas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consentimiento del interesado:</strong> Para el envío de comunicaciones comerciales</li>
                <li><strong>Ejecución de un contrato:</strong> Para la gestión de reservas y servicios</li>
                <li><strong>Interés legítimo:</strong> Para responder a consultas y gestionar la relación comercial</li>
                <li><strong>Cumplimiento de obligaciones legales:</strong> Para cumplir con la normativa aplicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">4. Conservación de los datos</h2>
              <p className="mb-4">
                Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">5. Destinatarios de los datos</h2>
              <p className="mb-4">
                Sus datos no serán cedidos a terceros, salvo obligación legal o cuando sea necesario para la prestación de los servicios solicitados (por ejemplo, a escuelas de surf colaboradoras para la organización de viajes).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">6. Derechos del interesado</h2>
              <p className="mb-4">
                Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición, así como revocar el consentimiento prestado, dirigiendo una comunicación escrita a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a></li>
                <li><strong>Teléfono:</strong> <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_LINK}`} className="text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_CONTACT_PHONE}</a></li>
              </ul>
              <p className="mb-4 mt-4">
                También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que el tratamiento no se ajusta a la normativa vigente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">7. Cookies</h2>
              <p className="mb-4">
                Este sitio web utiliza cookies técnicas necesarias para su funcionamiento. Para más información sobre el uso de cookies, consulte nuestra política de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">8. Seguridad</h2>
              <p className="mb-4">
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales que tratamos, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">9. Modificaciones</h2>
              <p className="mb-4">
                Nos reservamos el derecho de modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. En dichos supuestos, anunciaremos en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-gray-900">10. Contacto</h2>
              <p className="mb-4">
                Para cualquier duda o consulta sobre esta política de privacidad, puede contactar con nosotros a través de:
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