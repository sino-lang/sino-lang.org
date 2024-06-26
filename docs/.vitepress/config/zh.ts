
import { defineConfig, type DefaultTheme } from 'vitepress'

// const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'Sino程序设计语言',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/install/': { base: '/install/', items: sidebarGuide() },
      // '/learn/': { base: '/learn/', items: sidebarReference() },
      // '/playground/': { base: '/learn/', items: sidebarReference() },
      // '/tools/': { base: '/learn/', items: sidebarReference() },
      '/governance/': { base: '/governance/', items: sidebarGovernance() },
      // '/Community/': { base: '/learn/', items: sidebarReference() },
      // '/Nlog/': { base: '/learn/', items: sidebarReference() },
    },

    editLink: {
      pattern: 'https://github.com/sino-lang/sino-lang.org/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © Sino 基金会`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '安装',
      link: '/install/how-to-install',
      activeMatch: '/install/'
    },
    {
      text: '学习',
      link: '/learn/get-started',
      activeMatch: '/learn/'
    },
    // {
    //   text: '实验',
    //   link: '/playground/index',
    //   activeMatch: '/playground/'
    // },
    {
      text: '文档',
      link: '/docs/index',
      activeMatch: '/docs/'
    },
    {
      text: '工具',
      link: '/tools/index',
      activeMatch: '/tools/'
    },
    {
      text: '治理',
      link: '/governance/team',
      activeMatch: '/governance/'
    },
    {
      text: '社区',
      link: '/community/index',
      activeMatch: '/community/'
    },
    {
      text: '博客',
      link: '/blog/index',
      activeMatch: '/blog/'
    },
    {
      text: '关于',
      link: '/about',
      activeMatch: '/'
    },
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: '更新日志',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: '参与贡献',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '快速开始', link: 'getting-started' },
        { text: '路由', link: 'routing' },
        { text: '部署', link: 'deploy' }
      ]
    },
    {
      text: '自定义',
      collapsed: false,
      items: [
        { text: '自定义主题', link: 'custom-theme' },
        { text: '扩展默认主题', link: 'extending-default-theme' },
        { text: '构建时数据加载', link: 'data-loading' },
        { text: 'SSR 兼容性', link: 'ssr-compat' },
        { text: '连接 CMS', link: 'cms' }
      ]
    },
    {
      text: '实验性功能',
      collapsed: false,
      items: [
        { text: 'MPA 模式', link: 'mpa-mode' },
        { text: 'sitemap 生成', link: 'sitemap-generation' }
      ]
    },
  ]
}


export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}

function sidebarGovernance(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Governance',
      collapsed: false,
      items: [
        { text: '团队', link: 'team' },
        { text: 'RFC 流程', link: 'rfc' },
        { text: '工作组', link: 'group' },
      ]
    },
  ]
}