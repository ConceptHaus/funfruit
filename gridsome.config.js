// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'FUNFRUIT',
  plugins: [
    {
      use: 'gridsome-plugin-vue-toasted',
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'https://intense-brook-96340.herokuapp.com',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['Article','Category','Product'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        resources: '@/assets/sass/app.scss',
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },
  ],
  templates:{
    Category:[{
      path:'/category/:slug',
    }]
  },
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  }
}
