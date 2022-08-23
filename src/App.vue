<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { NConfigProvider } from 'naive-ui'
const themeOverrides = {
  common: {
    primaryColorHover: '#9dc31e'
  },
  Card: {
    titleTextColor: '#fff'
  },
  Menu: {
    itemTextColor: '#fff'
  },
  Table: {
    tdColor: '#d1dfe7',
    thColor: '#173446',
    tdColorStriped: '#fdfdfb',
    borderColor: '#5e6160',
    thTextColor: '#cdedff',
    tdTextColor: '#112797'
  },
  Pagination: {
    itemTextColor: '#ffe4c4',
    itemTextColorActive: '#f29766',
    itemTextColorPressed: '#fff',
    buttonColor: '#ffe4c4',
    itemBorderActive: '#ffe4c4'
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/register">註冊</RouterLink>
        <RouterLink to="/login">登入</RouterLink>
        <RouterLink to="/about">關於我們</RouterLink>
      </nav>
    </div>
  </header> -->
  <RouterView />
</n-config-provider>
</template>

<style>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */

.n-dialog .n-dialog__icon {
  display: none !important;
}

</style>
