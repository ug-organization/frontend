<template>
  <section class="catalog">
    <div class="container">
      <h2 class="catalog__title">Каталог</h2>
      <div class="catalog__grid">
        <div class="catalog__item">
          <div class="catalog__image-wrapper">
            <img
              src="/img/catalog-img-1.webp"
              alt="Каталог 1"
              class="catalog__image"
            />
            <div class="catalog__overlay">
              <h3 class="catalog__item-title">
                Канализационные насосные станции
              </h3>

              <NuxtLink to="/product" class="btn-reset catalog__button">
                Смотреть подробнее
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="catalog__item">
          <div class="catalog__image-wrapper">
            <img
              src="/img/catalog-img-2.webp"
              alt="Каталог 2"
              class="catalog__image"
            />
            <div class="catalog__overlay">
              <h3 class="catalog__item-title">Локальные очистные сооружения</h3>

              <NuxtLink to="/product" class="catalog__button">
                Смотреть подробнее
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="catalog__item">
          <div class="catalog__image-wrapper">
            <img
              src="/img/catalog-img-3.webp"
              alt="Каталог 3"
              class="catalog__image"
            />
            <div class="catalog__overlay">
              <h3 class="catalog__item-title">Насосные станции</h3>

              <NuxtLink to="/product" class="catalog__button">
                Смотреть подробнее
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components'
</script>

<style lang="scss" scoped>
.catalog {
  padding: 80px 0 120px 0;
  @media screen and (max-width: 1200px) {
    padding: 80px 0 100px 0;
  }
  @media screen and (max-width: 900px) {
    padding: 30px 0 80px 0;
  }
  &__title {
    font-family: 'Onest';
    font-size: 28px;
    font-weight: 700;
    color: #054263;
    margin: 0 0 30px 0;
    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }
    @media screen and (max-width: 900px) {
      font-size: 20px;
      margin: 0 0 20px 0;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    @media screen and (max-width: 900px) {
      height: 250px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to top,
      rgba(5, 66, 99, 0.95) 0%,
      rgba(5, 66, 99, 0.8) 50%,
      rgba(5, 66, 99, 0.4) 100%
    );
    padding: 10px 12px 10px;
    color: #ffffff;
  }

  &__item-title {
    font-family: 'Onest';
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 15px 0;
    line-height: 1.3;
    @media screen and (max-width: 900px) {
      margin: 0 0 10px 0;
      font-size: 14px;
    }
  }

  &__button {
    display: inline-block;
    background: #ffffff;
    color: #054263;
    border: none;
    border-radius: 8px;
    padding: 8px 10px;
    font-family: 'Onest';
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 900px) {
      padding: 6px 8px;
      font-size: 12px;
    }
    &:hover {
      background: #e7f5fc;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
