export default {
  // mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
			{rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/apple-touch-icon-57x57.png'},
			{rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/apple-touch-icon-114x114.png'},
			{rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/apple-touch-icon-72x72.png'},
			{rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/apple-touch-icon-144x144.png'},
			{rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/apple-touch-icon-60x60.png'},
			{rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/apple-touch-icon-120x120.png'},
			{rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/apple-touch-icon-76x76.png'},
			{rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/apple-touch-icon-152x152.png'},
			{rel: 'icon', type: 'image/png', href: '/favicon-196x196.png', sizes: '196x196'},
			{rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
			{rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
			{rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
			{rel: 'icon', type: 'image/png', href: '/favicon-128.png', sizes: '128x128' },
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
		'nuxt-responsive-loader'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
	server: {
		port: 8000, // default: 3000
		host: '0.0.0.0', // default: localhost
	},
	responsiveLoader: {
		name: 'img/[hash:7]-[width].[ext]',
		sizes: [640, 750, 860, 1024, 1920], 
		adapter: require('responsive-loader/sharp'),
		quality: 90
	},
  target: 'static'
}
