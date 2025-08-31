<template>
  <Teleport to="body">
    <Transition name="popup">
      <div v-if="isOpen" class="popup-overlay" @click="closePopup">
        <div class="popup" @click.stop>
          <button class="popup__close" @click="closePopup">
            <span class="popup__close-icon">✕</span>
          </button>

          <div class="popup__content">
            <h2 class="popup__title">Отправить заявку</h2>
            <p class="popup__description">
              Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
            </p>

            <form class="popup__form" @submit.prevent="submitForm">
              <div class="popup__form-group">
                <label for="name" class="popup__label">Имя *</label>
                <PrimeInputText
                  id="name"
                  v-model="name"
                  type="text"
                  placeholder="Введите ваше имя"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="popup__form-group">
                <label for="phone" class="popup__label">Телефон *</label>
                <PrimeInputMask
                  id="phone"
                  v-model="phone"
                  mask="+7 (999) 999-99-99"
                  placeholder="+7 (___) ___-__-__"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="popup__form-group">
                <label for="email" class="popup__label">Email</label>
                <PrimeInputText
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="popup__form-group">
                <label for="message" class="popup__label">Сообщение</label>
                <PrimeTextarea
                  id="message"
                  v-model="message"
                  placeholder="Введите ваше сообщение"
                  rows="4"
                  autocomplete="off"
                />
              </div>

              <button type="submit" class="popup__submit">
                <span class="popup__submit-text">Отправить заявку</span>
              </button>
            </form>
            <p v-if="isSuccess" class="popup__success">
              Спасибо! Ваша заявка отправлена.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
const { name, phone, email, message, handleSubmit, resetForm, isSuccess } =
  sendMail()

const submitForm = async () => {
  await handleSubmit(email.value, phone.value, name.value, message.value)
  resetForm()
}

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const closePopup = () => {
  emit('close')
}
</script>

<style lang="scss" scoped>
:deep(.p-inputtext) {
  width: 100%;
  border-radius: 8px;
  padding: 6px 12px;
  font-family: 'Onest';
  font-size: 14px;
  transition: all 0.3s ease;
  &::placeholder {
    font-size: 14px;
  }
  @media screen and (max-width: 900px) {
    font-size: 12px;
    padding: 4px 12px;
    &::placeholder {
      font-size: 12px;
    }
  }
}

:deep(.p-inputmask) {
  width: 100%;
  border-radius: 8px;
  padding: 6px 12px;
  font-family: 'Onest';
  font-size: 14px;
  transition: all 0.3s ease;
  outline: none;

  &::placeholder {
    font-size: 14px;
  }
  @media screen and (max-width: 900px) {
    font-size: 12px;
    padding: 4px 12px;
    &::placeholder {
      font-size: 12px;
    }
  }
}

:deep(.p-textarea) {
  width: 100%;
  border-radius: 8px;
  padding: 6px 12px;
  font-family: 'Onest';
  font-size: 14px;
  transition: all 0.3s ease;
  resize: none;
  outline: none;

  &::placeholder {
    font-size: 14px;
  }
  @media screen and (max-width: 900px) {
    font-size: 12px;
    padding: 4px 12px;
    &::placeholder {
      font-size: 12px;
    }
  }
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999;
  padding: 20px;
}

.popup {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  max-height: 700px;
  overflow-y: auto;
  position: relative;
  @media screen and (max-width: 900px) {
    max-width: 298px;
  }
}

.popup__success {
  font-family: 'Onest';
  font-size: 14px;
  color: #025b0f;
  text-align: center;
  margin-top: 10px;
}
.popup__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #e5e7eb;
    transform: scale(1.1);
  }
  @media screen and (max-width: 900px) {
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
  }
}

.popup__close-icon {
  font-size: 18px;
  color: #6b7280;
  font-weight: 600;
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
}

.popup__content {
  padding: 65px 30px 30px;
  @media screen and (max-width: 900px) {
    padding: 40px 20px 20px;
  }
}

.popup__title {
  font-family: 'Onest';
  font-size: 20px;
  font-weight: 700;
  color: #054263;
  margin: 0 0 15px 0;
  text-align: center;
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
}

.popup__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 900px) {
    gap: 15px;
  }
}

.popup__description {
  font-family: 'Onest';
  font-size: 16px;
  font-weight: 400;
  color: #054263;
  text-align: center;
  margin: 0 0 30px 0;
  line-height: normal;
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
}

.popup__form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.popup__label {
  font-family: 'Onest';
  font-size: 14px;
  font-weight: 600;
  color: #054263;
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
}

.popup__submit {
  background: linear-gradient(135deg, #054263 0%, #0f6999 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 11px 24px;
  font-family: 'Onest';
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  @media screen and (max-width: 900px) {
    padding: 8px 16px;
    font-size: 12px;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(5, 66, 99, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
