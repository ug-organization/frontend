<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__main">
          <div class="footer__company">
            <p class="footer__description">
              Производственное предприятие «ЮГ» - ведущий производитель
              канализационных насосных станций, локальных очистных сооружений и
              насосных станций для пожаротушения и водоснабжения.
            </p>
          </div>

          <div class="footer__services">
            <h3 class="footer__title">Навигация</h3>
            <ul class="list-reset footer__list">
              <li v-for="(item, index) in navItems" :key="index">
                <NuxtLink :to="item.to" class="footer__link">{{
                  item.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer__contacts">
            <h3 class="footer__title">Контакты</h3>
            <div class="footer__contact-item">
              <img
                src="/img/phone-footer.png"
                alt="phone"
                class="footer__contact-icon"
              />
              <a href="tel:+79123744193" class="footer__contact-link"
                >+7 (912) 374-41-93</a
              >
            </div>
            <div class="footer__contact-item">
              <img
                src="/img/mail-footer.png"
                alt="mail"
                class="footer__contact-icon"
              />
              <a href="mailto:zakaz@yug-ns.ru" class="footer__contact-link"
                >zakaz@yug-ns.ru</a
              >
            </div>
            <div class="footer__social">
              <a
                href="https://t.me/+79123744193"
                class="footer__social-link"
                target="_blank"
              >
                <img
                  src="/img/telegram-footer.png"
                  alt="telegram"
                  class="footer__social-icon"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=79123744193"
                class="footer__social-link"
                target="_blank"
              >
                <img
                  src="/img/whatsapp-footer.png"
                  alt="whatsapp"
                  class="footer__social-icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <div class="footer__copyright">
            <p class="footer__copyright-text">
              &copy; 2015 Производственное предприятие «ЮГ». Все права защищены.
            </p>
            <p class="footer__dev">
              Разработка сайта:
              <a
                href="https://primedev.pro/"
                target="_blank"
                class="footer__dev-link"
                >PRIMEDEV.PRO</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(135deg, #054263 0%, #0f6999 100%);
  color: #ffffff;
  padding: 60px 0 30px 0;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__main {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 40px;
    align-items: start;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__description {
    font-family: 'Onest';
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }

  &__title {
    font-family: 'Onest';
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 20px 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__link {
    font-family: 'Onest';
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }

    &:hover {
      color: #ffffff;
      transform: translateX(5px);
    }
  }

  &__contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
  }

  &__contact-icon {
    width: 25px;
    height: auto;
    @media screen and (max-width: 1200px) {
      width: 20px;
    }
  }

  &__contact-link {
    font-family: 'Onest';
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: color 0.3s ease;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
    &:hover {
      color: #ffffff;
    }
  }

  &__social {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    @media screen and (max-width: 1200px) {
      gap: 10px;
    }
  }

  &__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all 0.3s ease;
    @media screen and (max-width: 1200px) {
      width: 35px;
      height: 35px;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &__social-icon {
    width: 25px;
    height: auto;
    @media screen and (max-width: 1200px) {
      width: 20px;
    }
  }

  &__bottom {
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    @media screen and (max-width: 1200px) {
      padding-top: 20px;
    }
  }

  &__copyright {
    &-text {
      font-family: 'Onest';
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      @media screen and (max-width: 1200px) {
        font-size: 12px;
      }
    }
  }

  &__dev {
    padding: 10px 0;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Onest';

    &-link {
      color: #00dc82;
      font-weight: 400;
      font-size: 16px;
      font-family: 'Onest';
    }
  }
}
</style>
