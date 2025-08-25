<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <img class="header__logo" src="/img/logo.png" alt="logo" />
        <div class="header__contacts header__contacts--desktop">
          <div class="header__contacts-item">
            <img
              class="header__contacts-img"
              src="/img/phone.png"
              alt="phone"
            />
            <a href="tel:+79123744193" class="header__contacts-link"
              >+7 (912) 374-41-93</a
            >
          </div>
          <div class="header__contacts-item">
            <img class="header__contacts-img" src="/img/mail.png" alt="mail" />
            <a href="mailto:yug_ns@mail.ru" class="header__contacts-link"
              >yug_ns@mail.ru</a
            >
          </div>
        </div>

        <div class="header__media header__media--desktop">
          <a href="/" class="header__media-link">
            <img
              class="header__contacts-img"
              src="/img/telegram.png"
              alt="telegram"
            />
          </a>

          <a href="/" class="header__media-link">
            <img
              class="header__contacts-img"
              src="/img/whatsapp.png"
              alt="whatsapp"
            />
          </a>
        </div>

        <div class="header__navigation header__navigation--desktop">
          <button class="btn-reset header__button" @click="openPopup">
            <span class="header__button-text">Отправить заявку</span>
          </button>
          <nav class="header__menu">
            <ul class="list-reset header__menu-list">
              <li
                v-for="(item, index) in navItems"
                :key="index"
                class="header__menu-item"
              >
                <NuxtLink :to="item.to" class="header__menu-link">{{
                  item.title
                }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <button
          class="header__burger"
          :class="{ 'header__burger--active': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Открыть меню"
        >
          <span class="header__burger-line"></span>
          <span class="header__burger-line"></span>
          <span class="header__burger-line"></span>
        </button>
      </div>
    </div>

    <div
      class="header__mobile-overlay"
      :class="{ 'header__mobile-overlay--active': isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>

    <div
      class="header__mobile-menu"
      :class="{ 'header__mobile-menu--active': isMobileMenuOpen }"
    >
      <div class="header__mobile-contacts">
        <div class="header__mobile-contacts-item">
          <img src="/img/phone.png" alt="phone" />
          <a href="tel:+79123744193">+7 (912) 374-41-93</a>
        </div>
        <div class="header__mobile-contacts-item">
          <img src="/img/mail.png" alt="mail" />
          <a href="mailto:yug_ns@mail.ru">yug_ns@mail.ru</a>
        </div>
      </div>
      <nav class="header__mobile-nav">
        <ul class="header__mobile-nav-list">
          <li
            v-for="(item, index) in navItems"
            :key="index"
            class="header__mobile-nav-item"
          >
            <NuxtLink
              :to="item.to"
              class="header__mobile-nav-link"
              @click="closeMobileMenu"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="header__mobile-cta">
        <button class="header__mobile-button" @click="openPopup">
          Отправить заявку
        </button>
      </div>

      <div class="header__mobile-social">
        <a href="/" class="header__mobile-social-link">
          <img src="/img/telegram.png" alt="telegram" />
        </a>
        <a href="/" class="header__mobile-social-link">
          <img src="/img/whatsapp.png" alt="whatsapp" />
        </a>
      </div>
    </div>

    <PopUp :is-open="isPopupOpen" @close="closePopup" />
  </header>
</template>

<script lang="ts" setup>
import PopUp from './PopUp.vue'
import { navItems } from '../../utils/navItems'

const isPopupOpen = ref(false)
const isMobileMenuOpen = ref(false)

const openPopup = () => {
  isPopupOpen.value = true
  isMobileMenuOpen.value = false
}

const closePopup = () => {
  isPopupOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #e5e7eb;
  padding: 25px 0;
  position: relative;
  @media screen and (max-width: 1200px) {
    padding: 15px 0;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &__logo {
    width: 100%;
    max-width: 150px;
    height: auto;
    @media screen and (max-width: 1200px) {
      max-width: 100px;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &--desktop {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &-img {
      width: 32px;
      height: auto;
      @media screen and (max-width: 1200px) {
        width: 24px;
      }
    }

    &-link {
      font-family: 'Onest';
      font-size: 16px;
      font-weight: 600;
      color: #054263;
      text-decoration: none;
      transition: all 0.3s ease;
      @media screen and (max-width: 1200px) {
        font-size: 14px;
      }
      &:hover {
        color: #0f6999;
      }
    }

    &-item {
      display: flex;
      gap: 10px;
      align-items: center;
      @media screen and (max-width: 1200px) {
        gap: 5px;
      }
    }
  }

  &__media {
    display: flex;
    gap: 10px;
    @media screen and (max-width: 1200px) {
      gap: 5px;
    }

    &--desktop {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }

  &__button {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: #ffffff;
    border: 2px solid #0f6999;
    width: 100%;
    max-width: max-content;
    transition: all 0.3s ease;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    &:hover {
      background: #0f6999;
      box-shadow: 0 4px 16px rgba(15, 105, 153, 0.3);

      .header__button-text {
        color: #ffffff;
      }

      &::before {
        background: url('/img/phone-2-hover.png') no-repeat center center;
        content: '';
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background-size: contain;
      }
    }
    &::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      background: url('/img/phone-2.png') no-repeat center center;
      background-size: contain;
      @media screen and (max-width: 1200px) {
        width: 20px;
        height: 20px;
      }
    }
    &-text {
      color: #054263;
      font-size: 16px;
      font-weight: 600;
      padding: 8px 17px 8px 40px;
      font-family: 'Onest';
      transition: color 0.3s ease;
      @media screen and (max-width: 1200px) {
        font-size: 14px;
      }
    }
  }

  &__navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    @media screen and (max-width: 1200px) {
      gap: 10px;
    }

    &--desktop {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }

  &__menu {
    &-list {
      display: flex;
      gap: 5px;
      @media screen and (max-width: 1200px) {
        gap: 3px;
      }
    }
    &-item {
      padding: 5px 8px;
      background: #e7f5fc;
      transition: all 0.3s ease;
      border-radius: 6px;
      @media screen and (max-width: 1200px) {
        padding: 3px 5px;
      }
      &:hover {
        background: #0f6999;
        box-shadow: 0 2px 8px rgba(15, 105, 153, 0.2);

        .header__menu-link {
          color: #ffffff;
        }
      }
    }
    &-link {
      font-family: 'Onest';
      font-size: 16px;
      font-weight: 600;
      color: #054263;
      text-decoration: none;
      transition: color 0.3s ease;
      @media screen and (max-width: 1200px) {
        font-size: 14px;
      }
    }
  }

  &__burger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 26px;
    height: 19px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    @media screen and (max-width: 1200px) {
      display: flex;
    }

    &--active {
      .header__burger-line {
        &:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-47deg) translate(5px, -5px);
        }
      }
    }

    &-line {
      width: 100%;
      height: 3px;
      background: #054263;
      border-radius: 2px;
      transition: all 0.3s ease;
      transform-origin: center;
    }
  }

  // Mobile menu overlay
  &__mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    &--active {
      opacity: 1;
      visibility: visible;
    }
  }

  &__mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    background: #ffffff;
    z-index: 1000;
    padding: 73px 20px;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    overflow-y: auto;

    &--active {
      right: 0;
    }
  }

  &__mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e7eb;
  }

  &__mobile-logo {
    width: 70px;
    height: auto;
  }

  &__mobile-close {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 2px;
      background: #054263;
      border-radius: 1px;

      &:first-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:last-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  &__mobile-contacts {
    margin-bottom: 30px;

    &-item {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 10px 0;
      border-bottom: 1px solid #f3f4f6;

      img {
        width: 20px;
        height: auto;
      }

      a {
        font-family: 'Onest';
        font-size: 14px;
        font-weight: 600;
        color: #054263;
        text-decoration: none;

        &:hover {
          color: #0f6999;
        }
      }
    }
  }

  &__mobile-nav {
    margin-bottom: 30px;

    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &-item {
      margin-bottom: 5px;
    }

    &-link {
      display: block;
      padding: 7px 9px;
      font-family: 'Onest';
      font-size: 13px;
      font-weight: 600;
      color: #054263;
      text-decoration: none;
      background: #f8fafc;
      border-radius: 12px;
      transition: all 0.3s ease;

      &:hover {
        background: #0f6999;
        color: #ffffff;
        transform: translateX(5px);
      }
    }
  }

  &__mobile-cta {
    margin-bottom: 30px;
  }

  &__mobile-button {
    width: 100%;
    max-width: max-content;
    padding: 9px 12px;
    background: linear-gradient(135deg, #054263 0%, #0f6999 100%);
    color: #ffffff;
    border: none;
    border-radius: 12px;
    font-family: 'Onest';
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(15, 105, 153, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(15, 105, 153, 0.4);
    }
  }

  &__mobile-social {
    display: flex;

    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #f8fafc;
      border-radius: 50%;
      transition: all 0.3s ease;

      img {
        width: 24px;
        height: auto;
      }
    }
  }
}
</style>
