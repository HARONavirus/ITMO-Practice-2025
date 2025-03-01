<script setup>
import { provide, ref } from 'vue';

import HeaderMobile from './HeaderMobile.vue';
import HeaderMenu from './HeaderMenu.vue';
import HeaderDesktop from './HeaderDesktop.vue';
import HeaderHair from './HeaderHair.vue';

const isCatalogOpen = ref(false)

const closeCatalogMenu = () => {
	isCatalogOpen.value = false
}

const openCatalogMenu = () => {
	isCatalogOpen.value = true
}

provide('menu', {
  close: closeCatalogMenu,
  open: openCatalogMenu,
  isOpen: isCatalogOpen
});

const pages = [
  {
    title: "home",
    link: "/"
  },
  {
    title: "world",
    link: "/world"
  },
  {
    title: "politics",
    link: "/politics"
  },
  {
    title: "tech",
    link: "/tech"
  },
  {
    title: "sport",
    link: "/sports"
  },
  {
    title: "culture",
    link: "/culture"
  },
]
</script>

<template>
  <header class="header">
    <HeaderHair class="header-hair-component" />
    <HeaderMobile class="header-mobile-component" />
    <HeaderMenu :pages="pages" class="header-menu-component" />
    <HeaderDesktop :pages="pages" class="header-desktop-component" />
  </header>
</template>

<style scoped>
.header-mobile-component,
.header-menu-component {
    display: block;
}

.header-desktop-component {
    display: none;
}

.header-hair-component {
  position: fixed;
  width: 100%;
}

@media (min-width: 1280px) {
  .header-mobile-component, 
  .header-menu-component {
    display: none;
  }

  .header-desktop-component {
    display: flex;
  }
}
</style>
