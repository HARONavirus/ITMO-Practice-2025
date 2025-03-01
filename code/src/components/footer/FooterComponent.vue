<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const pages = [
  {
    title: "world",
    link: "/world",
    pages: [
      { name: "africa", link: "/africa" },
      { name: "america", link: "/america" },
      { name: "asia", link: "/asia" },
      { name: "australia", link: "/australia" },
      { name: "china", link: "/china" },
      { name: "europe", link: "/europe" },
      { name: "india", link: "/india" },
      { name: "middleEast", link: "/middle-east" }
    ]
  },
  {
    title: "politics",
    link: "/politics",
    pages: [
      { name: "ukrain", link: "/ukrain" },
      { name: "europe", link: "/europe" },
      { name: "facts", link: "/facts" },
      { name: "currentYear", link: "/current-year" },
      { name: "midterms", link: "/midterms" }
    ]
  },
  {
    title: "business",
    link: "/business",
    pages: [
      { name: "markets", link: "/markets" },
      { name: "tech", link: "/tech" },
      { name: "media", link: "/media" },
      { name: "success", link: "/success" },
      { name: "perspectives", link: "/perspectives" },
      { name: "videos", link: "/videos" }
    ]
  },
  {
    title: "tech",
    link: "/tech",
    pages: [
      { name: "innovate", link: "/innovate" },
      { name: "gadget", link: "/gadget" },
      { name: "foreseeable", link: "/foreseeable" },
      { name: "future", link: "/future" },
      { name: "ahead", link: "/ahead" },
      { name: "upstarts", link: "/upstarts" },
      { name: "work", link: "/work" },
      { name: "transformed", link: "/transformed" },
      { name: "innovative", link: "/innovative" },
      { name: "cities", link: "/cities" }
    ]
  },
  {
    title: "sport",
    link: "/sport",
    pages: [
      { name: "football", link: "/football" },
      { name: "tennis", link: "/tennis" },
      { name: "golf", link: "/golf" },
      { name: "olympics", link: "/olympics" },
      { name: "usSports", link: "/us-sports" },
      { name: "climbing", link: "/climbing" },
      { name: "motorsport", link: "/motorsport" },
      { name: "esports", link: "/esports" }
    ]
  },
  {
    title: "culture",
    link: "/culture",
    pages: [
      { name: "arts", link: "/arts" },
      { name: "design", link: "/design" },
      { name: "fashion", link: "/fashion" },
      { name: "architecture", link: "/architecture" },
      { name: "luxury", link: "/luxury" },
      { name: "beauty", link: "/beauty" },
      { name: "video", link: "/video" }
    ]
  },
]
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div v-for="page in pages" :key="page?.title" class="footer__content__item">
        <p class="footer__content__item__title">
          {{ t(`footer.pages.${page.title}`) }}
        </p>
        <div v-for="link in page.pages" :key="link?.name" class="footer__content__item__link">
          <p class="footer__content__item__link__title">
            {{ t(`footer.subpages.${link.name}`) }}
          </p>
        </div>
      </div>
    </div>
    <div class="footer__info">
      <div class="footer__info__left">
        <img src="@/assets/svg/logo.svg" alt="Логотип" class="footer__info__left__logo">
        <p class="footer__info__left__copy">{{ t(`footer.info.copy`) }}</p>
      </div>
      <div class="footer__info__right">
        <div class="footer__info__right__networks">
          <img src="@/assets/svg/facebook.svg" alt="Иконка FaceBook" class="footer__info__right__networks__item">
          <img src="@/assets/svg/twitter.svg" alt="Иконка Twitter" class="footer__info__right__networks__item">
          <img src="@/assets/svg/youtube.svg" alt="Иконка YouTube" class="footer__info__right__networks__item">
          <img src="@/assets/svg/tiktok.svg" alt="Иконка TikTok" class="footer__info__right__networks__item-tok">
        </div>
        <div class="footer__info__right__links">
          <p class="footer__info__right__links__item">{{ t(`footer.info.conditions`) }}</p>
          <p class="footer__info__right__links__item">{{ t(`footer.info.cookies`) }}</p>
          <p class="footer__info__right__links__item">{{ t(`footer.info.ads`) }}</p>
          <p class="footer__info__right__links__item">{{ t(`footer.info.aboutUs`) }}</p>
          <p class="footer__info__right__links__item">{{ t(`footer.info.join`) }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #F1F1F1;
}

.footer__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1180px;
  padding: 56px 15px 11px 15px;
  border-bottom: 1px solid black;
}

.footer__content__item__title {
  font-family: "Inter", serif;
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 16px;
  cursor: pointer;
}

.footer__content__item__link__title {
  font-family: "Inter", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  cursor: pointer;
}

.footer__info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1180px;
  padding: 40px 15px;
}

.footer__info__left,
.footer__info__right {
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: flex-end;
}

.footer__info__left__logo {
  width: 120px;
  height: 24px;
}

.footer__info__left__copy {
  font-family: "Inter", serif;
  font-weight: 400;
  font-size: 14px;
  color: #505050;
}

.footer__info__right {
  align-items: flex-end;
}

.footer__info__right__networks {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.footer__info__right__links {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.footer__info__right__links__item {
  font-family: "Inter", serif;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
}

@media (max-width: 850px) {
  .footer__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
  }

  .footer__content__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .footer__info__left,
  .footer__info__right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 515px) {
  .footer__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }

  .footer__info__left__copy {
    text-align: center;
  }

  .footer__info__right__links {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
}
</style>