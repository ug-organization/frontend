<template>
  <section class="advantages">
    <div class="container">
      <h3 class="advantages__title">Наши преимущества:</h3>

      <div class="advantages__grid">
        <div class="advantages__item">
          <!-- <div class="advantages__icon">
            <img src="/img/icons/money.svg" alt="Деньги" />
          </div> -->
          <div class="advantages__content">
            <h4 class="advantages__subtitle">Индивидуальные скидки</h4>
            <p class="advantages__text">
              Системы скидок разрабатываются индивидуально для каждого клиента
            </p>
          </div>
        </div>

        <div class="advantages__item">
          <!-- <div class="advantages__icon">
                <img src="/img/icons/building.svg" alt="Здание" />
              </div> -->
          <div class="advantages__content">
            <h4 class="advantages__subtitle">Специальные условия</h4>
            <p class="advantages__text">
              Специальные условия работы для строительных и монтажных
              организаций, муниципальных бюджетных организаций, ТСЖ и УК,
              промышленных предприятий
            </p>
          </div>
        </div>

        <div class="advantages__item">
          <!-- <div class="advantages__icon">
            <img src="/img/icons/team.svg" alt="Команда" />
          </div> -->
          <div class="advantages__content">
            <h4 class="advantages__subtitle">Опытная команда</h4>
            <p class="advantages__text">
              Коллектив компании - сплоченная команда специалистов, сочетающих в
              себе опыт нескольких поколений в сфере энергетики, тепло и
              водоснабжения; профессионализм, энергичность и оперативность в
              работе с Заказчиком, в подборе оборудования, монтаже и
              эксплуатации
            </p>
          </div>
        </div>

        <div class="advantages__item">
          <!-- <div class="advantages__icon">
            <img src="/img/icons/lightning.svg" alt="Молния" />
          </div> -->
          <div class="advantages__content">
            <h4 class="advantages__subtitle">Быстрые поставки</h4>
            <p class="advantages__text">Точные и кратчайшие сроки поставки</p>
          </div>
        </div>

        <div class="advantages__item">
          <!-- <div class="advantages__icon">
              <img src="/img/icons/refresh.svg" alt="Обновление" />
            </div> -->
          <div class="advantages__content">
            <h4 class="advantages__subtitle">Гибкость в замене</h4>
            <p class="advantages__text">
              Возможность оптимальной замены неподходящего по срокам поставки,
              стоимости и техническому заданию оборудования на аналогичное с
              техническим и экономическим обоснованием нашего выбора
            </p>
          </div>
        </div>

        <div class="advantages__item">
          <!-- <div class="advantages__icon">
            <img src="/img/icons/check.svg" alt="Галочка" />
          </div> -->
          <div class="advantages__content">
            <h4 class="advantages__subtitle">Гарантия качества</h4>
            <p class="advantages__text">
              Все оборудование сертифицировано и имеет гарантию до 4 лет
            </p>
          </div>
        </div>
      </div>

      <div class="advantages__partnership">
        <p class="advantages__partnership-text">
          Предлагая сотрудничество, мы рассчитываем приобрести в Вашем лице
          постоянного клиента и Партнера по бизнесу, в свою очередь обещаем
          качество в обслуживании и добросовестность в работе!
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.advantages {
  padding: 0px 0 100px 0;
  background: #ffffff;
  @media screen and (max-width: 900px) {
    padding: 0 0 70px 0;
  }
  &__title {
    font-family: 'Onest';
    font-size: 32px;
    font-weight: 700;
    color: #054263;
    text-align: center;
    margin: 0 0 50px 0;
    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }
    @media screen and (max-width: 900px) {
      margin: 0 0 25px 0;
      font-size: 20px;
      text-align: left;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 25px;
    margin-bottom: 50px;
  }

  // &__item {
  //   display: flex;
  //   gap: 20px;
  //   padding: 25px;
  //   background: #ffffff;
  //   border-radius: 16px;
  //   border: 1px solid #e5e7eb;
  //   @media screen and (max-width: 900px) {
  //     align-items: center;
  //     padding: 20px;
  //   }
  // }

  &__icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e7f5fc;
    border-radius: 50%;
    @media screen and (max-width: 1200px) {
      width: 50px;
      height: 50px;
    }
    @media screen and (max-width: 900px) {
      display: none;
    }
    img {
      width: 32px;
      height: 32px;
      object-fit: contain;
      @media screen and (max-width: 1200px) {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__content {
    flex: 1;
  }

  &__subtitle {
    font-family: 'Onest';
    font-size: 18px;
    font-weight: 700;
    color: #054263;
    // margin: 0 0 10px 0;
    line-height: 1.3;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
  }

  &__text {
    font-family: 'Onest';
    font-size: 14px;
    font-weight: 400;
    color: #6b7280;
    margin: 0;
    line-height: 1.5;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
  }

  &__partnership {
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 30px;
    background: linear-gradient(135deg, #054263 0%, #0f6999 100%);
    border-radius: 16px;
    color: #ffffff;
    text-align: center;
    @media screen and (max-width: 1200px) {
      padding: 20px;
    }
    @media screen and (max-width: 900px) {
      padding: 15px;
    }
  }

  &__partnership-text {
    font-family: 'Onest';
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
    line-height: 1.6;
    flex: 1;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
  }
}
</style>
