import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
export default defineConfig({
  vite: {
    plugins: [
      UnoCSS(),
    ],
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-index/client',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-index',
        '@nolebase/ui',
      ],
    }
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    }
  },
  title: "TransGuide",
  description: "trans.guide",
  head: [
    ['link', { rel: 'icon', href: '/icon.png'}]
  ],
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/trans-guide/TransGuide' }
    ],
    logo: '/icon.png',
    lastUpdated: {
      text: '当前页面最后更新于',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    editLink: {
      pattern: 'https://github.com/trans-guide/TransGuide/edit/main/docs/:path',
      text: '对当前页面提出修改建议'
    },
    aside: false,
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索内容',
                buttonAriaLabel: '搜索内容'
              },
              modal: {
                displayDetails: '显示详细列表',
                noResultsText: '没有相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                }
              }
            }
          }
        }
      }
    },
    darkModeSwitchLabel: '深色模式',
    footer: {
      copyright: '© 2025 TransGuide'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '本地社群', link: 'local' }
    ]
  }
})
