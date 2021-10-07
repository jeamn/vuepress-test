import type { SidebarConfig } from '@vuepress/theme-default'

export const config: SidebarConfig = {
  '/app/guide/': [
    {
      text: '子应用接入指南',
      children: [
        '/app/guide/access-guide.md'
      ],
    }
  ],
  '/app/standard/': [
    {
      text: '子应用开发规范',
      children: [
        '/app/standard/common-component.md',
        '/app/standard/file-location.md',
        '/app/standard/named.md',
      ],
    }
  ],
  '/bff/': [
    {
      text: 'BFF开发',
      children: [
        '/bff/README.md'
      ],
    }
  ]
}
