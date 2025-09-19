export function sendMail() {
  // const email = ref('')
  const phone = ref('')
  // const name = ref('')
  const message = ref('')
  const files = ref<File[]>([])
  const isSuccess = ref(false)

const resetForm = () => {
  // email.value = ''
  phone.value = ''
  // name.value = ''
  message.value = ''
  files.value = []
}

  const handleSubmit = async (phone: string, message: string, filesToSend?: File[]) => {
try {
  const mail = useMail()
  
  let attachments = []
  if (filesToSend && filesToSend.length > 0) {
    // Конвертируем все файлы в base64 для отправки
    for (const file of filesToSend) {
      const base64 = await fileToBase64(file)
      attachments.push({
        filename: file.name,
        content: base64,
        contentType: file.type || 'application/octet-stream',
        encoding: 'base64'
      })
    }
  }

  const filesList = filesToSend && filesToSend.length > 0 
    ? filesToSend.map(file => `${file.name} (${Math.round(file.size / 1024)} КБ)`).join(', ')
    : ''

  console.log('Отправляем письмо с вложениями:', {
    filesCount: attachments.length,
    files: attachments.map(att => ({
      filename: att.filename,
      contentType: att.contentType,
      contentLength: typeof att.content === 'string' ? att.content.length : 0
    }))
  })

  await mail.send({
    from: 'd.kireenkov32rus@yandex.ru',
    to: 'd.kireenkov@yandex.ru',
    subject: `Новая заявка с сайта - ${phone}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #054263;">Новая заявка с сайта yug-ns.ru</h2>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong></p>
        <div style="background: #f5f5f5; padding: 10px; border-radius: 4px;">
          ${message || 'Сообщение не указано'}
        </div>
        ${filesList ? `<p><strong>Прикрепленные файлы:</strong> ${filesList}</p>` : ''}
        <hr>
        <small style="color: #666;">Время отправки: ${new Date().toLocaleString('ru-RU')}</small>
      </div>
    `,
    attachments: attachments
  })
  
  isSuccess.value = true
  resetForm()

  setTimeout(() => {
    isSuccess.value = false
  }, 3000)
} catch (error: any) {
  console.error('Ошибка отправки письма:', error)
  
  // Показываем пользователю понятное сообщение об ошибке
  if (error?.response?.status === 413) {
    alert('Ошибка: Размер файлов слишком большой. Попробуйте уменьшить размер файлов или отправить их по частям.')
  } else if (error?.message?.includes('Request Entity Too Large')) {
    alert('Ошибка: Размер файлов превышает лимит сервера. Попробуйте уменьшить размер файлов.')
  } else {
    alert('Произошла ошибка при отправке письма. Попробуйте еще раз или свяжитесь с нами по телефону.')
  }
}
  }

  // Функция для конвертации файла в base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer
        const bytes = new Uint8Array(arrayBuffer)
        let binary = ''
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i] || 0)
        }
        const base64 = btoa(binary)
        resolve(base64)
      }
      reader.onerror = error => reject(error)
    })
  }

  return {
    phone,
    message,
    files,
    isSuccess,
    handleSubmit,
    resetForm
  }
}
