import type { NavbarConfig } from '@vuepress/theme-default'

export const config: NavbarConfig = [
  {
    text: '子应用开发',
    children: [
      {
        text: '子应用接入指南',
        children: [
          '/app/guide/access-guide.md'
        ]
      },
      {
        text: '子应用开发规范',
        children: [
          '/app/standard/common-component.md',
          '/app/standard/file-location.md',
          '/app/standard/named.md',
        ],
      }
    ],
  },
  {
    text: 'BFF开发',
    children: [
      {
        text: '开发说明',
        link: '/bff/README.md',
      },
      {
        text: '构建部署',
        link: 'https://admin-drms.hlgdata.com/project-manage/detail?project_id=77',
      },
    ],
  },
  {
    text: '类型定义',
    link: 'https://npm.gaoding.com/package/@csc/market-types'
  },
  {
    text: '公共组件库文档',
    link: 'https://git.gaoding.com/pages/operations-market/views/'
  },
  {
    text: '后台系统',
    children: [
      {
        text: '旧菜市场',
        link: 'http://admin.dev.dancf.com/topics',
      },
      {
        text: '轻舟平台',
        link: 'https://market-dev.gaoding.com/entry',
      },
    ]
  },
  {
    text: '了解更多',
    children: [
      {
        text: 'VuePress 文档',
        link: 'https://v2.vuepress.vuejs.org/zh/',
      },
      {
        text: 'Awesome VuePress',
        link: 'https://github.com/vuepress/awesome-vuepress',
      }
    ],
  },

]
