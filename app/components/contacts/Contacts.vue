<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__header">
        <h2 class="contacts__title">Контакты</h2>
        <p class="contacts__subtitle">
          Свяжитесь с нами любым удобным способом
        </p>
      </div>

      <div class="contacts__grid">
        <div class="contacts__card">
          <div class="contacts__card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </div>
          <h3 class="contacts__card-title">Телефон</h3>
          <a href="tel:+79123744193" class="contacts__card-link"
            >+7 (912) 374-41-93</a
          >
        </div>

        <div class="contacts__card">
          <div class="contacts__card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3 class="contacts__card-title">Email</h3>
          <a href="mailto:zakaz@yug-ns.ru" class="contacts__card-link"
            >zakaz@yug-ns.ru</a
          >
        </div>

        <div class="contacts__card">
          <div class="contacts__card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 class="contacts__card-title">Адрес</h3>
          <p class="contacts__card-address">
            Россия, г. Киров, Производственная, 14А.
          </p>
        </div>

        <div class="contacts__card">
          <div class="contacts__card-icon contacts__card-icon--telegram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.56-.44.7-.9.44l-2.49-1.84-1.2 1.16c-.13.13-.24.24-.49.24l.18-2.56 4.63-4.18c.2-.18-.04-.28-.31-.1l-5.72 3.6-2.46-.77c-.54-.17-.55-.54.11-.8l9.57-3.69c.45-.17.84.1.7.8z"
              />
            </svg>
          </div>
          <h3 class="contacts__card-title">Telegram</h3>
          <a
            href="https://t.me/+79123744193"
            target="_blank"
            class="contacts__card-link contacts__card-button"
          >
            Написать в Telegram
          </a>
        </div>

        <div class="contacts__card">
          <div class="contacts__card-icon contacts__card-icon--whatsapp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
              />
            </svg>
          </div>
          <h3 class="contacts__card-title">WhatsApp</h3>
          <a
            href="https://api.whatsapp.com/send?phone=79123744193"
            target="_blank"
            class="contacts__card-link contacts__card-button"
          >
            Написать в WhatsApp
          </a>
        </div>
        <div class="contacts__card">
          <div class="contacts__card-icon-2">
            <img src="/img/mail-2.png" alt="img" />
          </div>
          <h3 class="contacts__card-title" style="opacity: 0">-</h3>
          <button
            @click="openPopup"
            class="btn-reset contacts__card-link contacts__card-button"
          >
            Отправить заявку и приложить файл
          </button>
        </div>
      </div>
      <div class="maps__component">
        <ClientOnly>
          <ContactsMapComponent />
        </ClientOnly>
      </div>
    </div>
    <PopUp :is-open="isPopupOpen" @close="closePopup" />
  </section>
</template>

<script lang="ts" setup>
import PopUp from '../common/PopUp.vue'
const isPopupOpen = ref(false)
const isMobileMenuOpen = ref(false)

const openPopup = () => {
  isPopupOpen.value = true
  isMobileMenuOpen.value = false
}

const closePopup = () => {
  isPopupOpen.value = false
}
</script>

<style lang="scss" scoped>
.contacts {
  padding: 157px 0 15px 0;
  @media screen and (max-width: 1200px) {
    padding: 130px 0 15px 0;
  }
  @media screen and (max-width: 900px) {
    padding: 15px 0 15px 0;
  }
  &__header {
    text-align: center;
    margin-bottom: 60px;

    @media screen and (max-width: 768px) {
      margin-bottom: 40px;
    }
  }
  &__title {
    font-family: 'Onest';
    font-size: 28px;
    font-weight: 700;
    color: #054263;
    margin: 0 0 15px 0;

    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }
    @media screen and (max-width: 900px) {
      font-size: 20px;
      margin: 0 0 10px 0;
    }
  }

  &__subtitle {
    font-family: 'Onest';
    font-size: 16px;
    font-weight: 400;
    color: #6b7280;
    margin: 0;
    line-height: 1.6;

    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 60px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
      margin-bottom: 40px;
    }
  }
  &__card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 30px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      border-color: #0f6999;
    }

    @media screen and (max-width: 768px) {
      padding: 25px 20px;
    }
  }
  &__span {
    display: inline-block;
  }
  &__card-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #e7f5fc 0%, #d1f2ff 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;

    svg {
      color: #054263;
      width: 30px;
      height: 30px;
    }

    @media screen and (max-width: 768px) {
      width: 50px;
      height: 50px;
      margin-bottom: 15px;
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  &__card-icon-2 {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;

    @media screen and (max-width: 768px) {
      width: 50px;
      height: 50px;
      margin-bottom: 15px;
    }
  }
  &__card-title {
    font-family: 'Onest';
    font-size: 16px;
    font-weight: 700;
    color: #054263;
    margin: 0 0 15px 0;

    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
  }

  &__card-link {
    font-family: 'Onest';
    font-size: 16px;
    font-weight: 600;
    color: #0f6999;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #054263;
    }

    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
  }

  &__card-address {
    font-family: 'Onest';
    font-size: 16px;
    font-weight: 600;
    color: #054263;
    margin: 0 0 10px 0;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  &__card-button {
    background: linear-gradient(135deg, #0f6999 0%, #054263 100%);
    color: #ffffff !important;
    padding: 12px 24px;
    border-radius: 8px;
    text-align: center;
    display: inline-block;
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: 600;
    margin-top: 10px;

    &:hover {
      background: linear-gradient(135deg, #054263 0%, #0f6999 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(15, 105, 153, 0.3);
    }

    @media screen and (max-width: 768px) {
      padding: 10px 20px;
      font-size: 14px;
    }
  }

  &__card-icon--telegram {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);

    svg {
      color: #0088cc;
    }
  }

  &__card-icon--whatsapp {
    background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);

    svg {
      color: #25d366;
    }
  }
}
.maps__component {
  width: 100%;
  min-height: 350px;
  border-radius: 25px;
  border: 1px solid #8f8f8f;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    min-height: 250px;
  }
}
</style>
