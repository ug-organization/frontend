export function sendMail() {
  const phone = ref('')
  const message = ref('')
  const files = ref<File[]>([])
  const isSuccess = ref(false)

const resetForm = () => {
  phone.value = ''
  message.value = ''
  files.value = []
}

  const handleSubmit = async (phone: string, message: string, files: File[]) => {
try {
  console.log('Submitting with files:', files)
  
  // Создаем FormData для отправки файлов
  const formData = new FormData()
  formData.append('phone', phone)
  formData.append('message', message)
  
  // Добавляем файлы
  files.forEach((file, index) => {
    formData.append(`file_${index}`, file)
  })

  // Отправляем через API
  await $fetch('/api/send-mail', {
    method: 'POST',
    body: formData
  })
  
  resetForm()
  isSuccess.value = true

  setTimeout(() => {
    isSuccess.value = false
  }, 3000)
} catch (error) {
  console.error(error)
}
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
