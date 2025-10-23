import { NextResponse } from 'next/server'
import { Resend } from 'resend'


export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }
  
    const verifiedDomain = process.env.DOMAIN
    const apiKey = process.env.RESEND_API_KEY
    const ownerEmail: string = process.env.NEXT_PUBLIC_CONTACT_EMAIL || ""
    const envFromEmail = process.env.RESEND_FROM_EMAIL
    const defaultFromEmail = `notificaciones@${verifiedDomain}`
    const fromEmail =
      envFromEmail && envFromEmail.toLowerCase().endsWith(`@${verifiedDomain}`) ? envFromEmail : defaultFromEmail

    if (!apiKey) {
      return NextResponse.json({ ok: false, error: 'Email configuration is missing' }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const from = `Surfeando Sueños <${fromEmail}>`
    const ownerSubject = 'Nuevo mensaje desde Surfeando Sueños'
    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

    const formattedMessageHtml = escapeHtml(message).replace(/\n/g, '<br>')

    const ownerText = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    const ownerHtml = `<p><strong>Nombre:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(
      email,
    )}</p><p><strong>Mensaje:</strong></p><p>${formattedMessageHtml}</p>`

    const confirmationSubject = '¡Gracias por escribirnos!'
    const confirmationText = `Hola ${name},\n\n¡Gracias por contactar para tu próxima sesión de surf! En breve te responderemos para cuadrar día, hora y detalles.\n\nEsto fue lo que nos contaste:\n${message}\n\nSi quieres añadir algo más, solo responde a este correo.\n\nNos vemos en el agua,\nEl equipo de Surfeando Sueños`
    const confirmationHtml = `<p>Hola ${escapeHtml(
      name,
    )},</p><p>¡Gracias por contactar para tu próxima sesión de surf! En breve te responderemos para cuadrar día, hora y detalles.</p><p><strong>Esto fue lo que nos contaste:</strong></p><p>${formattedMessageHtml}</p><p>Si quieres añadir algo más, solo responde a este correo.</p><p>Nos vemos en el agua,<br>El equipo de Surfeando Sueños</p>`

    const ownerResult = await resend.emails.send({
      from,
      to: ownerEmail,
      replyTo: email,
      subject: ownerSubject,
      text: ownerText,
      html: ownerHtml,
    })

    if (ownerResult.error) {
      console.error('Resend owner email error:', ownerResult.error)
      return NextResponse.json({ ok: false, error: 'Failed to send owner email' }, { status: 502 })
    }

    const confirmationResult = await resend.emails.send({
      from,
      to: email,
      replyTo: ownerEmail,
      subject: confirmationSubject,
      text: confirmationText,
      html: confirmationHtml,
    })

    if (confirmationResult.error) {
      console.error('Resend confirmation email error:', confirmationResult.error)
      return NextResponse.json({ ok: false, error: 'Failed to send confirmation email' }, { status: 502 })
    }

    console.info('Contact emails sent', {
      ownerEmailId: ownerResult.data?.id,
      confirmationEmailId: confirmationResult.data?.id,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
} 
