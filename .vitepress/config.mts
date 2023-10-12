import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "A VitePress Site",
  base: "/Blog/",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '代码', link: '/views/practicalProjects/crm' }
    ],

    sidebar: [
      {
        text: '实战项目',
        items: [
          { text: 'Vite + Vue3 + Ts开发Crm系统', link: '/views/practicalProjects/crm' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YangGoldDragon' }
    ]
  },
  rewrites: {
    'views/practicalProjects/crm.md': 'practicalProjects/crm.md',
  }
})
