import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  console.log('API endpoint called: /api/send-mail')
  try {
    const formData = await readMultipartFormData(event)
    
    if (!formData) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No form data received'
      })
    }

    // Извлекаем данные из формы
    let phone = ''
    let message = ''
    const files: { filename: string; data: Buffer; type: string }[] = []

    for (const field of formData) {
      if (field.name === 'phone') {
        phone = field.data.toString()
      } else if (field.name === 'message') {
        message = field.data.toString()
      } else if (field.name?.startsWith('file_')) {
        files.push({
          filename: field.filename || 'unknown',
          data: field.data,
          type: field.type || 'application/octet-stream'
        })
      }
    }

    // Создаем transporter для отправки email
    const transporter = nodemailer.createTransport({
      host: 'smtp.timeweb.ru',
      port: 587,
      secure: false,
      auth: {
        user: 'zakaz@yug-ns.ru',
        pass: 'YugNs565620)'
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Подготавливаем вложения
    const attachments = files.map(file => ({
      filename: file.filename,
      content: file.data,
      contentType: file.type
    }))

    // Отправляем email с вложениями
    const result = await transporter.sendMail({
      from: 'zakaz@yug-ns.ru',
      to: 'zakaz@yug-ns.ru',
      subject: 'Новая заявка с сайта',
      html: `
        <p><strong>Сообщение:</strong> ${message}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        ${files.length > 0 ? `<p><strong>Прикреплено файлов:</strong> ${files.length}</p>` : ''}
      `,
      attachments: attachments
    })
    
    console.log('Email sent successfully:', result.messageId)

    return {
      success: true,
      message: 'Email sent successfully'
    }
  } catch (error) {
    console.error('Error sending email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }
})
