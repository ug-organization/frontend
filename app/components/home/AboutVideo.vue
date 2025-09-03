<template>
  <section class="about-video">
    <div class="container">
      <!-- <h2 class="about-video__title">Видео о нас</h2> -->
      <div class="about-video__grid">
        <div class="about-video__video-item">
          <div
            v-if="videos[0] && !videos[0].loaded"
            class="about-video__video-poster"
            @click="loadVideo(0)"
          >
            <img
              src="/img/home-hero.webp"
              alt="video"
              class="about-video__poster-image"
            />
            <div class="about-video__play-button">
              <img
                src="/img/play.png"
                alt="Play"
                class="about-video__play-icon"
              />
            </div>
            <div class="about-video__video-info">
              <h3 class="about-video__video-info__title">Видео о нас</h3>
            </div>
          </div>

          <iframe
            v-if="videos[0] && videos[0].loaded"
            :src="videos[0].url"
            title="Видео о производстве КНС"
            frameborder="0"
            allowfullscreen
            class="about-video__video-iframe"
          ></iframe>
        </div>

        <!-- <div class="about-video__video-item">
          <div
            v-if="videos[1] && !videos[1].loaded"
            class="about-video__video-poster"
            @click="loadVideo(1)"
          >
            <img
              src="/img/logo.png"
              alt="Превью видео ЛОС"
              class="about-video__poster-image"
            />
            <div class="about-video__play-button">
              <img
                src="/img/play.png"
                alt="Play"
                class="about-video__play-icon"
              />
            </div>
            <div class="about-video__video-info">
              <h3 class="about-video__video-info__title">ЛОС сооружения</h3>
            </div>
          </div>

          <iframe
            v-if="videos[1] && videos[1].loaded"
            :src="videos[1].url"
            title="Видео о ЛОС сооружениях"
            frameborder="0"
            allowfullscreen
            class="about-video__video-iframe"
          ></iframe>
        </div>

        <div class="about-video__video-item">
          <div
            v-if="videos[2] && !videos[2].loaded"
            class="about-video__video-poster"
            @click="loadVideo(2)"
          >
            <img
              src="/img/logo.png"
              alt="Превью видео насосные станции"
              class="about-video__poster-image"
            />
            <div class="about-video__play-button">
              <img
                src="/img/play.png"
                alt="Play"
                class="about-video__play-icon"
              />
            </div>
            <div class="about-video__video-info">
              <h3 class="about-video__video-info__title">Насосные станции</h3>
            </div>
          </div>

          <iframe
            v-if="videos[2] && videos[2].loaded"
            :src="videos[2].url"
            title="Видео о насосных станциях"
            frameborder="0"
            allowfullscreen
            class="about-video__video-iframe"
          ></iframe>
        </div>

        <div class="about-video__video-item">
          <div
            v-if="videos[3] && !videos[3].loaded"
            class="about-video__video-poster"
            @click="loadVideo(3)"
          >
            <img
              src="/img/logo.png"
              alt="Превью видео монтаж"
              class="about-video__poster-image"
            />
            <div class="about-video__play-button">
              <img
                src="/img/play.png"
                alt="Play"
                class="about-video__play-icon"
              />
            </div>
            <div class="about-video__video-info">
              <h3 class="about-video__video-info__title">Монтаж и ПНР</h3>
            </div>
          </div>

          <iframe
            v-if="videos[3] && videos[3].loaded"
            :src="videos[3].url"
            title="Видео о монтаже и ПНР"
            frameborder="0"
            allowfullscreen
            class="about-video__video-iframe"
          ></iframe>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Video {
  url: string
  loaded: boolean
  allow: string
}

const videos = ref<Video[]>([
  {
    url: 'https://rutube.ru/play/embed/1b2d6144aeeb0a2083a126b4785d1b48',
    loaded: false,
    allow: 'clipboard-write; autoplay',
  },
])

// <iframe
//         width="720"
//         height="405"
//         src="https://rutube.ru/play/embed/1b2d6144aeeb0a2083a126b4785d1b48"
//         frameBorder="0"
//         allow="clipboard-write; autoplay"
//         allowFullScreen
//       ></iframe>

const loadVideo = (index: number) => {
  if (videos.value[index]) {
    videos.value[index].loaded = true
  }
}
</script>

<style lang="scss" scoped>
.about-video {
  background: #ffffff;
  padding: 0px 0 50px 0;
  padding: 0 0 50px 0;
  @media screen and (max-width: 900px) {
    padding: 0px 0 25px 0;
  }
  &__title {
    font-family: 'Onest';
    font-size: 36px;
    font-weight: 700;
    color: #054263;
    margin: 0 0 40px 0;
    line-height: 1.2;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }

  &__video-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
    background: #ffffff;
    cursor: pointer;
  }
  &__video-poster {
    position: relative;
    width: 100%;
    height: 100%;
    height: 450px;
    cursor: pointer;
    overflow: hidden;
    @media screen and (max-width: 900px) {
      height: 300px;
    }

    &:hover {
      .about-video__play-button {
        transform: translate(-50%, -50%) scale(1.1);
      }

      .about-video__play-icon {
        filter: brightness(1.2) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
      }
    }
  }
  &__play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &__poster-image {
    width: 100%;
    height: 100%;
    object-position: top 15% right 0;
    object-fit: cover;
  }

  &__play-icon {
    width: 70px;
    height: 70px;
    object-fit: contain;
    transition: all 0.3s ease;
    @media screen and (max-width: 900px) {
      width: 50px;
      height: 50px;
    }
  }
  &__video-iframe {
    width: 100%;
    height: 100%;
    height: 450px;
    display: block;
    border: none;
    @media screen and (max-width: 900px) {
      height: 300px;
    }
  }

  &__video-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at bottom, transparent 0%, #0f6999 0);
    padding: 12px 15px 12px;

    &__title {
      font-family: 'Onest';
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
      @media screen and (max-width: 1200px) {
        font-size: 14px;
      }
    }
  }
}
</style>
