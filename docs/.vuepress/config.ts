import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '轻舟文档中心',
      description: '轻舟项目介绍、开发指南以及最佳实践',
    }
  },

  themeConfig: {
    logo: '/public/images/logo.png',
    repo: 'jeamn/vuepress-test',
    docsDir: 'docs',
    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.config,

        // sidebar
        sidebar: sidebar.config,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },
  }
})
