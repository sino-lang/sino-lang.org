import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'
import { pt } from './pt'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
    // zh: { label: '简体中文', ...zh },
    // pt: { label: 'Português', ...pt },
    // ko: { label: '한국어', lang: 'ko-KR', link: 'https://vitepress.vuejs.kr/' }
  }
})