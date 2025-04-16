import { createRecentUpdatesLoader } from '@nolebase/vitepress-plugin-index/vitepress'
export default createRecentUpdatesLoader({
  dir: 'docs/docs',
  rewrites: [
    {
      from: /^docs\/docs/,
      to: 'docs/docs',
    },
  ],
})