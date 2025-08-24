<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__image">
          <div class="hero__image-overlay">
            <img src="/img/hero-img.webp" alt="image" class="hero__logo" />
            <div class="hero__overlay-text">
              <h1 class="hero__overlay-title">
                Производственное<br />предприятие<br />«ЮГ»
              </h1>
            </div>
          </div>
        </div>
        <div class="hero__content">
          <!-- <h1 class="hero__title">Производственное предприятие</h1>
          <h2 class="hero__subtitle">«ЮГ»</h2> -->

          <!-- <div class="hero__services">
            <NuxtLink to="/" class="hero__services-item">
              <div class="hero__services-icon">
                <img
                  class="hero__services-icon-img"
                  src="/img/heo-icon-1.png"
                  alt="icon"
                />
              </div>
              <div class="hero__services-text">
                <h3 class="hero__services-title">КНС</h3>
                <p class="hero__services-description">
                  Канализац ионные насосные станции
                </p>
              </div>
            </NuxtLink>

            <NuxtLink to="/" class="hero__services-item">
              <div class="hero__services-icon">
                <img
                  class="hero__services-icon-img"
                  src="/img/heo-icon-2.png"
                  alt="icon"
                />
              </div>
              <div class="hero__services-text">
                <h3 class="hero__services-title">ЛОС</h3>
                <p class="hero__services-description">
                  Локальные очистные сооружения
                </p>
              </div>
            </NuxtLink>

            <NuxtLink to="/" class="hero__services-item">
              <div class="hero__services-icon">
                <img
                  class="hero__services-icon-img"
                  src="/img/heo-icon-3.png"
                  alt="icon"
                />
              </div>
              <div class="hero__services-text">
                <h3 class="hero__services-title">Насосные станции</h3>
                <p class="hero__services-description">
                  Для пожаротушения и водоснабжения
                </p>
              </div>
            </NuxtLink>
          </div> -->
          <p class="hero__description">
            Компания «КПСБО ЮГ» была основана в 2008 году, как инжиниринговая
            организация со сферой деятельности, заключающейся в реализации
            проектов по тепло и водоснабжению, водоподготовке и водоотведению,
            пожаротушению и вентиляции. Компания предоставляет полный комплекс
            услуг, при котором Заказчик получает оптимальное решение
            поставленных задач: анализ объекта, проектирование, подбор,
            поставку, монтаж, пусконаладочные работы и последующее сопровождение
            проектов любой сложности.
          </p>

          <!-- <div class="hero__scope">
            <p class="hero__scope-text">
              Проектирование, производство, поставка, ПНР
            </p>
            <div class="hero__turnkey">
              <span class="hero__turnkey-text">Всё «под ключ»</span>
            </div>
          </div>

          <div class="hero__cta">
            <button class="btn-reset hero__button">
              <span class="hero__button-text">Получить консультацию</span>
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
  padding: 100px 0 150px 0;
  @media screen and (max-width: 1200px) {
    padding: 80px 0 100px 0;
  }
  @media screen and (max-width: 900px) {
    padding: 70px 0 80px 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 38px;
    align-items: center;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  // &__title {
  //   text-align: center;
  //   font-family: 'Onest';
  //   font-size: 36px;
  //   font-weight: 700;
  //   color: #054263;
  //   line-height: 1.2;

  // }

  // &__subtitle {
  //   text-align: center;
  //   font-family: 'Onest';
  //   font-size: 24px;
  //   font-weight: 600;
  //   color: #0f6999;
  // }

  &__services {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__description {
    font-family: 'Onest';
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #054263;
    text-align: center;
    @media screen and (max-width: 1200px) {
      line-height: normal;
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
      line-height: 1.5;
      text-align: left;
    }
  }

  &__services-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      border-color: #0f6999;
    }
  }

  &__services-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e7f5fc;
    border-radius: 50%;
    flex-shrink: 0;
    &-img {
      width: 35px;
      height: 35px;
      object-fit: contain;
    }
  }

  &__services-text {
    .hero__services-title {
      font-family: 'Onest';
      font-size: 18px;
      font-weight: 700;
      color: #054263;
      margin: 0 0 5px 0;
    }

    .hero__services-description {
      font-family: 'Onest';
      font-size: 16px;
      color: #6b7280;
      margin: 0;
      line-height: 1.5;
    }
  }

  &__scope {
    background: #ffffff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
  }

  &__scope-text {
    font-family: 'Onest';
    font-size: 18px;
    font-weight: 600;
    color: #054263;
    margin: 0 0 15px 0;
    text-align: center;
  }

  &__turnkey {
    display: flex;
    justify-content: center;
  }

  &__turnkey-text {
    font-family: 'Onest';
    font-size: 18px;
    font-weight: 700;
    color: #0f6999;
    background: #e7f5fc;
    padding: 10px 20px;
    border-radius: 25px;
    display: inline-block;
  }

  &__cta {
    display: flex;
    justify-content: center;
  }

  &__button {
    display: block;
    background: linear-gradient(135deg, #054263 0%, #0f6999 100%);
    color: #ffffff;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    font-family: 'Onest';
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(5, 66, 99, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(5, 66, 99, 0.4);
    }
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__image-overlay {
    position: relative;
    display: inline-block;
  }

  &__logo {
    width: 100%;
    height: 100%;
    max-height: 400px;
    border-radius: 20px;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
    filter: brightness(0.9) contrast(1.1);
  }

  &__overlay-text {
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: right;
    z-index: 2;
  }

  &__overlay-title {
    font-family: 'Onest';
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 5px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    line-height: 1.2;
    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
}
</style>
