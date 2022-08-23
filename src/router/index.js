import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '@/views/front/FrontLayout.vue'
import FrontHomeView from '@/views/front/HomeView.vue'
import NotFoundView from '@/views/NotFound.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: '怪獸天國',
            login: false,
            admin: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: '怪獸天國 | 註冊',
            login: false,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: '怪獸天國 | 登入',
            login: false,
            admin: false
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/front/CartView.vue'),
          meta: {
            title: '怪獸天國 | 購物車',
            login: true,
            admin: false
          }
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/views/front/OrderView.vue'),
          meta: {
            title: '怪獸天國 | 訂單',
            login: true,
            admin: false
          }
        },
        // {
        //   path: 'product/:id',
        //   name: 'product',
        //   component: () => import('@/views/front/ProductView.vue'),
        //   meta: {
        //     title: '怪獸購物網',
        //     login: false,
        //     admin: false
        //   }
        // },
        {
          path: 'product',
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          meta: {
            title: '怪獸天國 | 商品列表',
            login: false,
            admin: false
          }
        },
        {
          path: 'character',
          name: 'character',
          component: () => import('@/views/front/CharacterView.vue'),
          meta: {
            title: '怪獸天國 | 角色系列',
            login: false,
            admin: false
          }
        },
        {
          path: 'brand',
          name: 'brand',
          component: () => import('@/views/front/BrandView.vue'),
          meta: {
            title: '怪獸天國 | 品牌系列',
            login: false,
            admin: false
          }
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/front/AboutView.vue'),
          meta: {
            title: '怪獸天國 | 關於我們',
            login: false,
            admin: false
          }
        },
        {
          path: 'godzilla',
          name: 'godzilla',
          component: () => import('@/views/front/GodzillaView.vue'),
          meta: {
            title: '怪獸天國 | 哥吉拉系列',
            login: false,
            admin: false
          }
        },
        {
          path: 'ultraman',
          name: 'ultraman',
          component: () => import('@/views/front/UltramanView.vue'),
          meta: {
            title: '怪獸天國 | 超人力霸王系列',
            login: false,
            admin: false
          }
        },
        {
          path: 'gamera',
          name: 'gamera',
          component: () => import('@/views/front/GameraView.vue'),
          meta: {
            title: '怪獸天國 | 卡美拉系列',
            login: false,
            admin: false
          }
        },
        {
          path: 'xplus',
          name: 'xplus',
          component: () => import('@/views/front/XplusView.vue'),
          meta: {
            title: '怪獸天國 | X-PLUS系列',
            login: false,
            admin: false
          }
        },
        {
          path: 'shfiguarts',
          name: 'shfiguarts',
          component: () => import('@/views/front/SHFiguartsView.vue'),
          meta: {
            title: '怪獸天國 | S.H.Figuarts系列',
            login: false,
            admin: false
          }
        },
        {
          path: 'neca',
          name: 'neca',
          component: () => import('@/views/front/NecaView.vue'),
          meta: {
            title: '怪獸天國 | Neca系列',
            login: false,
            admin: false
          }
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/admin/HomeView.vue'),
          meta: {
            title: '怪獸天國 | 管理後台',
            login: true,
            admin: true
          }
        },
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta: {
            title: '怪獸天國 | 商品管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('@/views/admin/OrdersView.vue'),
          meta: {
            title: '怪獸天國 | 訂單管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('@/views/admin/UsersView.vue'),
          meta: {
            title: '怪獸天國 | 會員管理',
            login: true,
            admin: true
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '怪獸天國 | 404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
