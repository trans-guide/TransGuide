import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'
import './style.css'
import 'virtual:uno.css'
import { h } from 'vue'
import Share from './components/share.vue'
import '@nolebase/vitepress-plugin-index/client/style.css'
import { NolebaseIndexPlugin } from '@nolebase/vitepress-plugin-index/client'

const ExtendedTheme: Theme = {
    extends: DefaultTheme,
    Layout: () => {
      return h(DefaultTheme.Layout, null, {
        'nav-bar-content-after': () => h(Share),
      })
    },
    enhanceApp(ctx) {
      const { app } = ctx
      app.component('Share', Share)
      app.use(NolebaseIndexPlugin)
    },
  }
  
  export default ExtendedTheme