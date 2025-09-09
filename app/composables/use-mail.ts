export function sendMail() {
  // const email = ref('')
  const phone = ref('')
  // const name = ref('')
  const message = ref('')
  const file = ref<File | null>(null)
  const isSuccess = ref(false)

const resetForm = () => {
  // email.value = ''
  phone.value = ''
  // name.value = ''
  message.value = ''
  file.value = null
}

  const handleSubmit = async (phone: string, message: string, file?: File | null) => {
try {
  const mail = useMail()
  
  let attachments = []
  if (file) {
    // Конвертируем файл в base64 для отправки
    const base64 = await fileToBase64(file)
    attachments.push({
      filename: file.name,
      content: base64,
      contentType: file.type
    })
  }

  await mail.send({
    to: 'zakaz@yug-ns.ru',
    subject: 'Новая заявка с сайта "yug-ns.ru"',
    html: `
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Сообщение:</strong> ${message}</p>
      ${file ? `<p><strong>Прикрепленный файл:</strong> ${file.name}</p>` : ''}
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
        // Убираем префикс "data:image/jpeg;base64," и оставляем только base64
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
    file,
    isSuccess,
    handleSubmit,
    resetForm
  }
}
