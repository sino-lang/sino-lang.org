// import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

// const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'The Sino Programming Language',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en/install/': { base: '/en/install/', items: sidebarGuide() },
      // '/reference/': { base: '/en/reference/', items: sidebarReference() },
      '/en/governance/': { base: '/en/governance/', items: sidebarGovernance() }
    },

    editLink: {
      pattern: 'https://github.com/sino-lang/sino-lang.org/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Sino Foundation '
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Install',
      link: '/en/install/how-to-install',
      activeMatch: '/en/install/'
    },
    {
      text: 'Learn',
      link: '/en/learn/get-started',
      activeMatch: '/en/learn/'
    },
    // {
    //   text: 'Playground',
    //   link: '/en/playground/index',
    //   activeMatch: '/en/playground/'
    // },
    {
      text: 'Docs',
      link: '/en/docs/index',
      activeMatch: '/en/docs/'
    },
    {
      text: 'Tools',
      link: '/en/tools/index',
      activeMatch: '/en/tools/'
    },
    {
      text: 'Governance',
      link: '/en/governance/team',
      activeMatch: '/en/governance/'
    },
    {
      text: 'Community',
      link: '/en/community/index',
      activeMatch: '/en/community/'
    },
    {
      text: 'Blog',
      link: '/en/blog/index',
      activeMatch: '/en/blog/'
    },
    {
      text: 'About',
      link: '/en/about',
      activeMatch: '/en'
    },
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ]
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
        {
          text: 'Extending the Default Theme',
          link: 'extending-default-theme'
        },
        { text: 'Build-Time Data Loading', link: 'data-loading' },
        { text: 'SSR Compatibility', link: 'ssr-compat' },
        { text: 'Connecting to a CMS', link: 'cms' }
      ]
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        { text: 'MPA Mode', link: 'mpa-mode' },
        { text: 'Sitemap Generation', link: 'sitemap-generation' }
      ]
    },
  ]
}



function sidebarGovernance(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Governance',
      collapsed: false,
      items: [
        { text: 'Teams', link: 'team' },
        { text: 'RFC Process', link: 'rfc' },
        { text: 'Working Group', link: 'group' },
      ]
    },
  ]
}