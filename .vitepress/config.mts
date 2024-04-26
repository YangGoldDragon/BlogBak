import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "A VitePress Site",
  base: "/Blog/",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '代码', link: '/practicalProjects/admin' }
    ],

    sidebar: [
      {
        text: '实战项目',
        items: [
          { text: 'Vite + Vue3 + Ts 开发后台管理系统', link: '/practicalProjects/admin' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YangGoldDragon' }
    ]
  },
  rewrites: {
    'views/practicalProjects/admin.md': 'practicalProjects/admin.md',
  }
})
