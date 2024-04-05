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
      { text: '样例', link: 'https://nyacap.com' }
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
      {
        icon: {
          svg: '<svg width="100%" height="100%" viewBox="0 0 512 512" fill="currentColor"><title>NyaCodes (GitLab)</title><g><path d="M256,0C397.29,0 512,114.71 512,256C512,397.29 397.29,512 256,512C114.71,512 0,397.29 0,256C0,114.71 114.71,0 256,0ZM404.5,225.16L404.08,224.08L362.26,115.012C361.42,112.87 359.92,111.058 357.94,109.828C356.5,108.898 354.88,108.319 353.14,108.142C351.4,107.965 349.72,108.192 348.1,108.808C346.48,109.42 345.04,110.404 343.84,111.676C342.7,112.948 341.86,114.478 341.38,116.14L313.18,202.54L198.88,202.54L170.62,116.14C170.14,114.478 169.3,112.954 168.16,111.682C166.96,110.41 165.52,109.432 163.9,108.82C162.3,108.204 160.577,107.975 158.872,108.152C157.155,108.326 155.503,108.9 154.048,109.828C152.103,111.057 150.598,112.873 149.752,115.012L107.96,224.08L107.526,225.16C101.51,240.895 100.769,258.167 105.414,274.36C110.062,290.5 119.842,304.78 133.282,314.92L133.444,315.04L133.798,315.28L197.38,362.98L228.94,386.8L248.14,401.32C250.36,402.46 253.12,403.9 255.94,403.9C258.76,403.9 261.52,402.46 263.74,401.32L282.94,386.8L314.5,362.98L378.52,315.04L378.7,314.86C392.14,304.72 401.92,290.5 406.06,274.36C411.22,258.16 410.5,240.88 404.5,225.16Z" /></g></svg>',
        },
        link: "https://nya.codes/nyawork/nyacap",
        ariaLabel: "NyaCodes (GitLab)",
      },
      { 
        icon: 'github', 
        link: 'https://github.com/nyawork',
      },
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
