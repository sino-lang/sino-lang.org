import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  // base:'/sino-lang.org/',
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
  }),
})