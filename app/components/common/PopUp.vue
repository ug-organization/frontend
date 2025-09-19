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
              <!-- <div class="popup__form-group">
                <label for="name" class="popup__label">Имя *</label>
                <PrimeInputText
                  id="name"
                  v-model="name"
                  type="text"
                  placeholder="Введите ваше имя"
                  required
                  autocomplete="off"
                />
              </div> -->

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

              <!-- <div class="popup__form-group">
                  <label for="email" class="popup__label">Email</label>
                  <PrimeInputText
                    id="email"
                    v-model="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    autocomplete="off"
                  />
                </div> -->

              <div class="popup__form-group">
                <label for="message" class="popup__label">Сообщение</label>
                <PrimeTextarea
                  id="message"
                  v-model="message"
                  placeholder="Введите ваше сообщение."
                  autocomplete="off"
                />
              </div>

              <div class="popup__form-group">
                <label for="files" class="popup__label">Прикрепить файлы</label>
                <div class="popup__file-upload">
                  <input
                    id="files"
                    ref="fileInput"
                    type="file"
                    multiple
                    class="popup__file-input"
                    @change="handleFileChange"
                  />
                  <label for="files" class="popup__file-label">
                    <span class="popup__file-icon">📎</span>
                    <span class="popup__file-text"
                      >Выберите файлы (можно несколько)</span
                    >
                  </label>
                </div>

                <!-- Показываем выбранные файлы -->
                <div v-if="files.length > 0" class="popup__files-list">
                  <div class="popup__files-header">
                    <p class="popup__files-count">
                      Выбрано файлов: {{ files.length }}
                    </p>
                    <button
                      type="button"
                      class="popup__clear-all"
                      @click="files.length = 0"
                    >
                      Очистить все
                    </button>
                  </div>
                  <div
                    v-for="(file, index) in files"
                    :key="index"
                    class="popup__file-item"
                  >
                    <span class="popup__file-name">{{ file.name }}</span>
                    <button
                      type="button"
                      class="popup__file-remove-small"
                      @click="files.splice(index, 1)"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
              <span class="popup__policy"
                >Нажимая на кнопку, вы даёте согласие на обработку персональных
                данных, указанных в форме обратной связи, Оператору в целях
                коммуникации со мной.
              </span>
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
const { phone, message, files, handleSubmit, isSuccess } = sendMail()

const fileInput = ref<HTMLInputElement>()

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  console.log('Files selected:', target.files)
  if (target.files) {
    // Добавляем новые файлы к уже выбранным
    const newFiles = Array.from(target.files)
    files.value = [...files.value, ...newFiles]
    console.log('Total files:', files.value.length)

    // Очищаем input для возможности повторного выбора тех же файлов
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  }
}

const submitForm = async () => {
  await handleSubmit(phone.value, message.value, files.value)
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

.popup__policy {
  font-family: 'Onest';
  font-size: 14px;
  color: #054263;
}
.popup__policy-link {
  font-family: 'Onest';
  font-size: 14px;
  color: #054263;
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

.popup__file-upload {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.popup__file-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  overflow: hidden;
}

.popup__file-label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  font-family: 'Onest';
  font-size: 14px;
  color: #6b7280;

  &:hover {
    border-color: #0f6999;
    background: #f0f9ff;
  }

  @media screen and (max-width: 900px) {
    font-size: 12px;
    padding: 6px 10px;
  }
}

.popup__file-icon {
  font-size: 16px;
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
}

.popup__file-text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.popup__file-remove {
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    transform: scale(1.1);
  }
}

.popup__file-hint {
  font-family: 'Onest';
  font-size: 12px;
  color: #6b7280;
  margin: 5px 0 0 0;
  line-height: 1.4;

  @media screen and (max-width: 900px) {
    font-size: 10px;
  }
}

.popup__files-list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.popup__files-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.popup__files-count {
  font-family: 'Onest';
  font-size: 12px;
  color: #054263;
  font-weight: 600;
  margin: 0;
  background: #f0f9ff;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #0f6999;
}

.popup__clear-all {
  font-family: 'Onest';
  font-size: 11px;
  color: #ef4444;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fee2e2;
    border-color: #fca5a5;
  }
}

.popup__file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: #f3f4f6;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}

.popup__file-name {
  font-family: 'Onest';
  font-size: 12px;
  color: #374151;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
}

.popup__file-remove-small {
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover {
    background: #dc2626;
    transform: scale(1.1);
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
