import { config } from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'
import tplAdmin from './tpl'

const { result_code } = config

const timeout = 1000

const adminList = [
  {
    path: '/chat',
    component: '#',
    redirect: '/chat/index',
    name: 'chat',
    meta: {},
    children: [
      {
        path: 'index',
        component: 'views/Chat/Index',
        name: 'index',
        meta: {
          title: 'chat.title',
          icon: 'cib:telegram-plane'
        }
      }
    ]
  },
  {
    path: '/contact',
    component: '#',
    redirect: '/contact/companycontact',
    name: 'contact',
    meta: {
      title: 'contact.title',
      icon: 'ant-design:dashboard-filled'
    },
    children: [
      {
        path: 'companycontact',
        component: 'views/Contact/Companycontact',
        name: 'companycontact',
        meta: {
          title: 'contact.companycontact',
          icon: 'cib:telegram-plane'
        }
      },
      {
        path: 'phonebook',
        component: 'views/Contact/Phonebook',
        name: 'phonebook',
        meta: {
          title: 'contact.phonebook',
          icon: 'cib:telegram-plane'
        }
      },
      {
        path: 'mycontact',
        component: 'views/Contact/My',
        name: 'mycontact',
        meta: {
          title: 'contact.mycontact',
          icon: 'cib:telegram-plane'
        }
      }
    ]
  },
  ...tplAdmin
]

const testList: string[] = [
  '/dashboard',
  '/dashboard/analysis',
  '/dashboard/workplace',
  'external-link',
  'https://element-plus-admin-doc.cn/',
  '/guide',
  '/guide/index',
  '/components',
  '/components/form',
  '/components/form/default-form',
  '/components/form/use-form',
  '/components/form/ref-form',
  '/components/table',
  '/components/table/default-table',
  '/components/table/use-table',
  '/components/table/ref-table',
  '/components/editor-demo',
  '/components/editor-demo/editor',
  '/components/search',
  '/components/descriptions',
  '/components/image-viewer',
  '/components/dialog',
  '/components/icon',
  '/components/echart',
  '/components/count-to',
  '/components/qrcode',
  '/components/highlight',
  '/components/infotip',
  '/Components/InputPassword',
  '/Components/Sticky',
  '/hooks',
  '/hooks/useWatermark',
  '/level',
  '/level/menu1',
  '/level/menu1/menu1-1',
  '/level/menu1/menu1-1/menu1-1-1',
  '/level/menu1/menu1-2',
  '/level/menu2',
  '/example',
  '/example/example-dialog',
  '/example/example-page',
  '/example/example-add',
  '/example/example-edit',
  '/example/example-detail',
  '/error',
  '/error/404-demo',
  '/error/403-demo',
  '/error/500-demo'
]

export default [
  // 列表接口
  {
    url: '/role/list',
    method: 'get',
    timeout,
    response: ({ query }) => {
      const { roleName } = query
      return {
        code: result_code,
        data: {
          list: roleName === 'admin' ? adminList : testList
        }
      }
    }
  }
] as MockMethod[]
