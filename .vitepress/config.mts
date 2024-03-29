import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "zh",
  title: "NyaCap",
  description: "一个开源免费自部署的行为验证码解决方案",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "/assets/favicon.png",

    nav: [
      { text: '文档', link: '/' },
      { text: '样例', link: '/getting-started/#demo' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          {
            text: '快速开始',
            link: '/getting-started/',
          },
        ]
      },
      {
        text: '组件',
        link: '/components/',
        items: [
          { 
            text: '客户端', 
            items: [
              { text: 'Widget', link: '/components/client/widget/' },
            ],
          },
          { 
            text: '服务器', 
            items: [
              { text: 'Mini', link: '/components/server/mini/' },
            ],
          },
        ]
      },
      {
        text: '补充内容',
        items: [
          {
            text: '许可',
            link: '/license/'
          },
        ]
      },
    ],

    editLink: {
      pattern: "https://github.com/nyawork/nyacap-docs/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nyawork' }
    ],

    footer: {
      message:
        '基于 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC-BY-SA-4.0</a> 授权',
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "清除查询条件",
            backButtonTitle: "返回",
            noResultsText: "抱歉，暂时没有相关结果",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      level: 'deep',
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },

  sitemap: {
    hostname: 'https://docs.nyacap.com',
  },
})
