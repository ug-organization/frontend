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
          <a href="mailto:yug_ns@mail.ru" class="contacts__card-link"
            >yug_ns@mail.ru</a
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
      </div>
      <div class="maps__component">
        <ClientOnly>
          <ContactsMapComponent />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.contacts {
  padding: 100px 0 80px 0;
  @media screen and (max-width: 1200px) {
    padding: 80px 0 80px 0;
  }
  @media screen and (max-width: 900px) {
    padding: 70px 0 80px 0;
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
