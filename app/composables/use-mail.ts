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
        contentType: file.type
      })
    }
  }

  const filesList = filesToSend && filesToSend.length > 0 
    ? filesToSend.map(file => file.name).join(', ')
    : ''

  await mail.send({
    from: 'zakaz@yug-ns.ru',
    to: 'zakaz@yug-ns.ru',
    subject: 'Новая заявка с сайта "yug-ns.ru"',
    html: `
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Сообщение:</strong> ${message}</p>
      ${filesList ? `<p><strong>Прикрепленные файлы:</strong> ${filesList}</p>` : ''}
    `,
    attachments: attachments
  })
  
  isSuccess.value = true
  resetForm()

  setTimeout(() => {
    isSuccess.value = false
  }, 3000)
} catch (error) {
  console.error(error)
}
  }

  // Функция для конвертации файла в base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const result = reader.result as string
        // Убираем префикс "data:..." и оставляем только base64
        const base64 = result.split(',')[1]
        if (base64) {
          resolve(base64)
        } else {
          reject(new Error('Failed to convert file to base64'))
        }
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
