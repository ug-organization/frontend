<template>
  <section class="about">
    <div class="container">
      <div class="about__header">
        <h2 class="about__main-title">О компании</h2>
        <p class="about__subtitle">
          Профессиональные решения в области инженерных систем
        </p>
      </div>

      <div class="about__main-info">
        <div class="about__description-card">
          <p class="about__description-text">
            <strong>ЮГ</strong> — инжиниринговая организация, специализирующаяся
            на реализации проектов по тепло- и водоснабжению, водоподготовке и
            водоотведению, пожаротушению и вентиляции.
          </p>
        </div>
        <div class="about__features">
          <div class="feature-card">
            <div class="feature-icon">
              <img src="/img/icons/calendar.svg" alt="Календарь" />
            </div>
            <div class="feature-content">
              <h4 class="feature-title">Опыт работы</h4>
              <p class="feature-text">Оказываем услуги с 2008 года</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="/img/icons/shield.svg" alt="Щит" />
            </div>
            <div class="feature-content">
              <h4 class="feature-title">Гарантия качества</h4>
              <p class="feature-text">Предоставляем гарантию до 5 лет</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="/img/icons/check.svg" alt="Галочка" />
            </div>
            <div class="feature-content">
              <h4 class="feature-title">Сертифицированное оборудование</h4>
              <p class="feature-text">
                В работе используем только проверенные материалы
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="about__section">
        <h3 class="section-title">Направления работ</h3>
        <div class="services-grid">
          <div class="service-item">
            <div class="service-icon">
              <img src="/img/icons/audit.svg" alt="Аудит" />
            </div>
            <div class="service-content">
              <p>Аудит существующего объекта и оборудования</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="/img/icons/data.svg" alt="Анализ данных" />
            </div>
            <div class="service-content">
              <p>Сбор и анализ необходимых данных</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="/img/icons/reconstruction.svg" alt="Реконструкция" />
            </div>
            <div class="service-content">
              <p>Рекомендации по реконструкции или новому строительству</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="/img/icons/survey.svg" alt="Изыскания" />
            </div>
            <div class="service-content">
              <p>Инженерные изыскания и формирование отчетов</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="/img/icons/document.svg" alt="Документация" />
            </div>
            <div class="service-content">
              <p>Сопровождение проекта при разработке документации</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="/img/icons/design.svg" alt="Проектирование" />
            </div>
            <div class="service-content">
              <p>Проектирование инженерных систем</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="/img/icons/equipment.svg" alt="Оборудование" />
            </div>
            <div class="service-content">
              <p>Изготовление и поставка оборудования</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="/img/icons/construction.svg" alt="Строительство" />
            </div>
            <div class="service-content">
              <p>Строительно-монтажные и пусконаладочные работы</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">
              <img src="/img/icons/education.svg" alt="Обучение" />
            </div>
            <div class="service-content">
              <p>Обучение и консультирование персонала</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about__section">
        <h3 class="section-title">Почему выбирают нас</h3>
        <div class="advantages-grid">
          <div class="advantage-card">
            <h4 class="advantage-title">Индивидуальный подход</h4>
            <p class="advantage-text">
              Система скидок и специальные условия для различных типов
              организаций
            </p>
          </div>

          <div class="advantage-card">
            <h4 class="advantage-title">Долгосрочное партнерство</h4>
            <p class="advantage-text">
              Нацеленность на надежность и долгосрочное сотрудничество
            </p>
          </div>

          <div class="advantage-card">
            <h4 class="advantage-title">Экспертный опыт</h4>
            <p class="advantage-text">
              Команда специалистов с многолетним стажем в области энергетики
            </p>
          </div>

          <div class="advantage-card">
            <h4 class="advantage-title">Оптимальные решения</h4>
            <p class="advantage-text">
              Предлагаем обоснованные альтернативы без потери качества
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.about {
  padding: 100px 0 100px 0;

  @media screen and (max-width: 900px) {
    padding: 70px 0 70px 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__header {
    text-align: center;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
      margin-bottom: 60px;
    }
  }

  &__main-title {
    font-family: 'Onest';
    font-size: 32px;
    font-weight: 700;
    color: #054263;
    text-align: center;
    margin: 0 0 30px 0;
    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }
    @media screen and (max-width: 900px) {
      margin: 0 0 20px 0;
      font-size: 20px;
      text-align: left;
    }
  }

  &__subtitle {
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    color: #64748b;
    margin: 0;
    line-height: 1.6;

    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
  }

  // Основная информация
  &__main-info {
    margin-bottom: 50px;
    @media screen and (max-width: 900px) {
      margin-bottom: 25px;
    }
  }

  &__description-card {
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    margin-bottom: 60px;

    @media screen and (max-width: 768px) {
      padding: 30px 20px;
      margin-bottom: 40px;
    }
  }

  &__description-text {
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: #334155;
    margin: 0;
    text-align: center;

    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
  }

  // Ключевые преимущества
  &__features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .feature-card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    gap: 20px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }

    @media screen and (max-width: 768px) {
      padding: 20px;
      gap: 15px;
    }
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media screen and (max-width: 1200px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: 900px) {
      width: 30px;
      height: 30px;
    }
  }

  .feature-content {
    flex: 1;
  }

  .feature-title {
    font-family: 'Onest';
    font-size: 18px;
    font-weight: 700;
    color: #054263;
    margin: 0 0 10px 0;
    line-height: 1.3;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
  }

  .feature-text {
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    color: #64748b;
    margin: 0;
    line-height: 1.5;
  }

  // Секции
  &__section {
    margin-bottom: 50px;

    @media screen and (max-width: 900px) {
      margin-bottom: 25px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .section-title {
    font-family: 'Onest', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #054263;
    text-align: center;
    margin: 0 0 50px 0;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #054263, #0ea5e9);
      border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 40px;
    }
  }

  // Сетка услуг
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .service-item {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: flex-start;
    gap: 20px;

    @media screen and (max-width: 768px) {
      padding: 20px;
      gap: 15px;
    }
  }

  .service-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media screen and (max-width: 1200px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: 900px) {
      width: 30px;
      height: 30px;
    }
  }

  .service-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .service-number {
    background: linear-gradient(135deg, #054263, #0ea5e9);
    color: white;
    font-family: 'Onest', sans-serif;
    font-size: 14px;
    font-weight: 700;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    align-self: flex-start;

    @media screen and (max-width: 768px) {
      width: 28px;
      height: 28px;
      font-size: 12px;
    }
  }

  .service-item p {
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    line-height: 1.6;
    color: #334155;
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  // Сетка преимуществ
  .advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .advantage-card {
    background: white;
    padding: 35px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    text-align: center;
    border-top: 4px solid #054263;

    @media screen and (max-width: 768px) {
      padding: 25px 20px;
    }
  }

  .advantage-title {
    font-family: 'Onest', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #054263;
    margin: 0 0 15px 0;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  .advantage-text {
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #64748b;
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 13px;
    }
  }
}
</style>
