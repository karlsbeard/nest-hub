import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "互联网大厂租房指南",
  description: "专为互联网大厂员工打造的租房求生指南，告别黑中介，找到心仪的家",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '🛡️ 避坑指南', link: '/guide/' },
      { 
        text: '北京', 
        items: [
          { text: '京东总部', link: '/beijing/jingdong' },
          { text: '字节跳动', link: '/beijing/bytedance' },
          { text: '百度', link: '/beijing/baidu' },
          { text: '美团', link: '/beijing/meituan' }
        ]
      },
      { 
        text: '上海', 
        items: [
          { text: '阿里巴巴', link: '/shanghai/alibaba' },
          { text: '腾讯', link: '/shanghai/tencent' },
          { text: '拼多多', link: '/shanghai/pinduoduo' }
        ]
      },
      { 
        text: '广州', 
        items: [
          { text: '腾讯', link: '/guangzhou/tencent' },
          { text: '网易', link: '/guangzhou/netease' }
        ]
      },
      { 
        text: '深圳', 
        items: [
          { text: '腾讯', link: '/shenzhen/tencent' },
          { text: '华为', link: '/shenzhen/huawei' },
          { text: '字节跳动', link: '/shenzhen/bytedance' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '📖 指南总览',
          link: '/guide/'
        },
        {
          text: '🔍 租前准备',
          link: '/guide/preparation'
        },
        {
          text: '👀 实地看房',
          link: '/guide/viewing'
        },
        {
          text: '📝 签约谈判',
          link: '/guide/contract'
        },
        {
          text: '🏠 入住生活',
          link: '/guide/living'
        },
        {
          text: '⚠️ 常见陷阱',
          link: '/guide/traps'
        },
        {
          text: '🆘 维权指南',
          link: '/guide/rights'
        }
      ],
      '/beijing/': [
        {
          text: '北京地区',
          items: [
            { text: '京东总部', link: '/beijing/jingdong' },
            { text: '字节跳动', link: '/beijing/bytedance' },
            { text: '百度', link: '/beijing/baidu' },
            { text: '美团', link: '/beijing/meituan' }
          ]
        }
      ],
      '/shanghai/': [
        {
          text: '上海地区',
          items: [
            { text: '阿里巴巴', link: '/shanghai/alibaba' },
            { text: '腾讯', link: '/shanghai/tencent' },
            { text: '拼多多', link: '/shanghai/pinduoduo' }
          ]
        }
      ],
      '/guangzhou/': [
        {
          text: '广州地区',
          items: [
            { text: '腾讯', link: '/guangzhou/tencent' },
            { text: '网易', link: '/guangzhou/netease' }
          ]
        }
      ],
      '/shenzhen/': [
        {
          text: '深圳地区',
          items: [
            { text: '腾讯', link: '/shenzhen/tencent' },
            { text: '华为', link: '/shenzhen/huawei' },
            { text: '字节跳动', link: '/shenzhen/bytedance' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/nest-hub' }
    ],

    footer: {
      message: '本指南由巢聚-旦聚旦团队与互联网从业者共同维护，仅供参考',
      copyright: 'Copyright © 2025 互联网大厂租房指南'
    }
  }
})
