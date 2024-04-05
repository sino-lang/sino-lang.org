import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import { search as ptSearch } from './pt'

export const shared = defineConfig({
  title: 'Sino',
  description: '使每个人都能够构建可靠和高效的软件',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://sino.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  // head: [
  //   ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
  //   ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
  //   ['meta', { name: 'theme-color', content: '#5f67ee' }],
  //   ['meta', { property: 'og:type', content: 'website' }],
  //   ['meta', { property: 'og:locale', content: 'zh' }],
  //   ['meta', { property: 'og:title', content: 'Sino | Vite & Vue Powered Static Site Generator' }],
  //   ['meta', { property: 'og:site_name', content: 'VitePress' }],
  //   ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
  //   ['meta', { property: 'og:url', content: 'https://sino.dev/' }],
  //   ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  // ],

  themeConfig: {
    logo: { src: 'https://avatars.githubusercontent.com/u/86346785?s=200&v=4', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sino-lang/sino' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress',
        locales: { ...zhSearch, ...ptSearch }
      }
    },

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})