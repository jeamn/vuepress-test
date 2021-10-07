const path = require('path')
const { fs } = require('@vuepress/shared-utils')
const menuData = require('./menu')

const navList = []

menuData.map((item) => {
  if (item['menus'] && !!item['menus'].length) {
    navList.push({
      text: item.title,
      ariaLabel: item.title,
      link: item['path'] || '',
      target: item['target'],
      items: item.menus.map((menu) => ({
        text: menu.name,
        link: menu.path,
        target: menu.target,
      })),
    })
  } else {
    navList.push({
      text: item.title,
      link: item.path,
    })
  }
})

navList.push({
  text: 'Github', link: 'https://git.gaoding.com/gaoding/FE-docs'
});

function genDocsDir(name) {
  const dir = fs.readdirSync(path.join(__dirname, '..', name))
  return dir
    .sort()
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace('README.md', ''))
}

function sidebarItems(title, path, collapsable = false) {
  let children = genDocsDir(path)

  return {
    [path]: [
      {
        title,
        collapsable,
        children,
      },
    ],
  }
}
module.exports = {
  base: process.env.NODE_ENV === 'development' ? '/' : '/pages/operations-market/docs/',
  title: '轻舟文档中心',
  description: 'Welcome to market',
  plugins: ['@vuepress/back-to-top', 'fulltext-search'],
  repo: 'https://git.gaoding.com/operations-market/docs',
  themeConfig: {
    repo: 'vuejs/vuepress',
    title: null,
    lastUpdated: false,
    nav: navList,
    sidebar: {
      ...sidebarItems('轻舟BFF开发指南', '/bff/'),
      ...sidebarItems('轻舟子应用接入指南', '/app/'),
    },
  },
}
