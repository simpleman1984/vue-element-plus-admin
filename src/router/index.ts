import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'
import tplRouter from './tpl'

const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/analysis',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  ...tplRouter,
  {
    path: '/chat',
    component: Layout,
    name: 'chat',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/Chat/Index.vue'),
        name: 'index',
        meta: {
          title: t('chat.title')
        }
      }
    ]
  },
  {
    path: '/contact',
    component: Layout,
    name: 'contact',
    meta: {},
    children: [
      {
        path: 'companycontact',
        component: () => import('@/views/Contact/Companycontact.vue'),
        name: 'companycontact',
        meta: {
          title: t('contact.companycontact')
        }
      },
      {
        path: 'phonebook',
        component: () => import('@/views/Contact/Phonebook.vue'),
        name: 'phonebook',
        meta: {
          title: t('contact.phonebook')
        }
      },
      {
        path: 'mycontact',
        component: () => import('@/views/Contact/My.vue'),
        name: 'mycontact',
        meta: {
          title: t('contact.mycontact')
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
