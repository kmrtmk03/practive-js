module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sample',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if(!!config.module) {
        config.module.rules.push({
          test: /\.(vert|frag)$/i,
          use: ["raw-loader"] 
        })
      }
    },
    vendor: ['pixi.js']
  },
  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/style-resources'
  ],
  css: [
    '@/assets/css/common.css'
  ],
  styleResources:{
    scss: [
      '@/assets/css/variable.scss'
    ]
  },
  webfontloader: {
    google: {
      families: ['Josefin+Sans']
    }
  }
}

