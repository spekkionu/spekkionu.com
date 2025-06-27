import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro'
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.spekkionu.com',
  trailingSlash: "always",
  output: 'static',
  outDir: './_site',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  experimental: {
    clientPrerender: true,
  },

  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
    },
  },

  redirects: {
    '/page/1/': '/',
    '/rss.xml': '/feed.xml',
    '/atom.xml': '/feed.xml',
    '/sitemap.xml': '/sitemap-index.xml',
    '/category/general/': '/category/general-slash-other/',
    '/posts/1/': '/',
    '/posts/2/': '/page/2/',
    '/posts/3/': '/page/3/',
    '/posts/4/': '/page/4/',
    '/article/44/shirei-shizos-caretaker/': '/2005/03/shirei-shizos-caretaker/',
    '/article/47/why-type-3/': '/2005/03/why-type-3/',
    '/article/85/cards-you-should-own/': '/2005/03/cards-you-should-own/',
    '/article/168/upgrading-an-old-deck-part-3/': '/2005/04/upgrading-an-old-deck-part-3/',
    '/article/183/building-a-control-deck/': '/2005/04/building-a-control-deck/',
    '/article/185/call-of-the-wild/': '/2005/05/call-of-the-wild/',
    '/article/187/multiplayer-strategies/': '/2005/05/multiplayer-strategies/',
    '/article/195/deep-anal/': '/2005/05/deep-anal/',
    '/article/197/stompy/': '/2005/06/stompy/',
    '/article/201/really-big-red/': '/2005/06/really-big-red/',
    '/2005/06/history-of-mono-black-control/1000/': '/2005/06/history-of-mono-black-control/',
    '/article/207/my-magic-history/': '/2005/07/my-magic-history/',
    '/article/209/the-standard-metagame-tier-1-decks/': '/2005/07/the-standard-metagame-tier-1-decks/',
    '/article/217/delaying-shield/': '/2005/08/delaying-shield/',
    '/article/219/magic-sites/': '/2005/08/magic-sites/',
    '/article/221/nationals-2005-results/': '/2005/08/nationals-2005-results/',
    '/article/223/robo-beats/': '/2005/08/robo-beats/',
    '/article/225/ravnica-set-review/': '/2005/09/ravnica-set-review/',
    '/article/229/other-peoples-decks-samurai/': '/2005/10/other-peoples-decks-samurai/',
    '/article/231/ravnica-sleepers/': '/2005/11/ravnica-sleepers/',
    '/article/233/peasant-magic/': '/2006/06/peasant-magic/',
    '/article/235/magic-workstation-guide/': '/2006/06/magic-workstation-guide/',
  },

  integrations: [
    mdx({

    }),
    sitemap({
      filter: (page) => {
        // Exclude specific pages from the sitemap
        return !page.endsWith('/page/1/');
      }
    }),
    AstroPWA({
      manifest: {
        lang: 'en',
        name: 'Spekkionu\'s MTG Blog',
        dir: 'ltr',
        short_name: 'MTG Blog',
        description: 'A blog about Magic the Gathering.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'natural',
        start_url: '/',
        scope: '/',
        icons: [
          {
            "src": "/images/spekkionu-192x192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "/images/spekkionu-512x512.png",
            "type": "image/png",
            "sizes": "512x512"
          },
          {
            "src": "/images/maskable_icon.png",
            "type": "image/png",
            "sizes": "196x196",
            "purpose": "any maskable"
          }
        ]
      },
    }),
  ],

  vite: {
    css: {
      transformer: "lightningcss",
    },
  },

  adapter: netlify({
    imageCDN: false,
  }),
});
