export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '邓俊玉',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'http://at.alicdn.com/t/font_1776033_hpzkf49oa07.js'  //阿里字体
    }]
  },
  loading: {
    color: 'blue',
    height: '5px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // 项目里要用的 CSS 文件
    '@/assets/css/init.css'
  ],
  styleResources: {
    less: [
      './assets/css/common.less'
    ]
  },
  // 插件
  plugins: [{
    src: '@/plugins/element-ui',
    ssr: true
  }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  }
}
