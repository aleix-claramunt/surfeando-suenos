import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL

    if (!apiKey || !toEmail) {
      return NextResponse.json({ ok: false, error: 'Email configuration is missing' }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const subject = 'Nuevo mensaje desde Surfeando Sueños'
    const text = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`

    await resend.emails.send({
      from: 'Surfeando Sueños <no-reply@resend.dev>',
      to: [toEmail],
      //reply_to: email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
} 