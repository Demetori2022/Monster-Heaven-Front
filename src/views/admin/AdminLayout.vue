<template>
  <div class="menubox">
    <div class="logo">
      <img src="../../assets/logo.png">
    </div>
    <h1>後台管理系統</h1>
    <hr>
    <n-menu v-model:value="activeKey" :options="menuOptions" />
  </div>
  <n-back-top :right="100" />
  <RouterView></RouterView>
</template>

<script setup>
// import { storeToRefs } from 'pinia'
// import { useUserStore } from '@/stores/user'
import { h, ref, reactive } from 'vue'
import { RouterLink } from 'vue-router'

// const user = useUserStore()
// const { avatar, account } = storeToRefs(user)
const activeKey = ref(null)

const menuOptions = reactive([
  {
    label: () => h(RouterLink, {
      to: {
        path: '/'
      }
    }, { default: () => '回首頁' }),
    key: 'back'
  },

  {
    label: () => h(RouterLink, {
      to: {
        path: '/admin/products'
      }
    }, { default: () => '商品管理' }),
    key: 'products'
  },

  {
    label: () => h(RouterLink, {
      to: {
        path: '/admin/orders'
      }
    }, { default: () => '訂單管理' }),
    key: 'orders'
  },

  {
    label: () => h(RouterLink, {
      to: {
        path: '/admin/users'
      }
    }, { default: () => '會員管理' }),
    key: 'users'
  }
])

</script>

<style scoped>
* {
  width: 100%;
  box-sizing: border-box;
}

.logo {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 200px;
}
.menubox {
  width:15%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #02263b;
}

.menubox h1 {
  color: bisque;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 10px;
}

hr {
  margin-bottom: 30px;
  border: 1px solid bisque;
}

.n-menu {
  float: left;
  height: 50%;
}

.menubox >>> .n-menu-item-content-header a {
  padding-left: 60px;
  color: bisque;
  font-size: 1.5rem;
}

.menubox >>> .n-menu-item-content-header a.router-link-exact-active {
  color: orange;
}

.menubox >>> .n-menu a.router-link-exact-active:hover {
  background-color: transparent;
}

.menubox >>> .n-menu a itemTextColorActive:Hover {
  background-color: transparent;
  color: none;
}
/*
nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

</style>
