export function sendMail() {
  const email = ref('')
  const phone = ref('')
  const name = ref('')
  const message = ref('')
  const isSuccess = ref(false)

const resetForm = () => {
  email.value = ''
  phone.value = ''
  name.value = ''
  message.value = ''
}

  const handleSubmit = async (email: string, phone: string, name: string, message: string) => {
try {
  resetForm()
  const mail = useMail()
  await mail.send({
    to: 'info@yug-ns.ru',
        subject: 'Новая заявка с сайта "yug-ns.ru"',
        html: `
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Сообщение:</strong> ${message}</p>
        `,
  })
  isSuccess.value = true

  setTimeout(() => {
    isSuccess.value = false
  }, 3000)
} catch (error) {
  console.error(error)
}
  }

  return {
    email,
    phone,
    name,
    message,
    isSuccess,
    handleSubmit,
    resetForm
  }
}
