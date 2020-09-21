module.exports = {
  future:{
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault:true
  },
  separator: '_',
  theme: {
    fontFamily:{
      display:['Zilla Slab','sans-serif'],
      body:['Zilla Slab','sans-serif']
    },
    extend: {
      colors: {
        ui: {
          background: 'var(--color-ui-background)',
          gray: 'var(--color-ui-gray)',
          typo: 'var(--color-ui-typo)',
          primary: 'var(--color-ui-primary)',
          secondary: 'var(--color-ui-secondary)',
          navy: 'var(--color-ui-navy)',
          light: 'var(--color-ui-light)',
          blue:'var(--color-ui-blue)',
          green:'var(--color-ui-green)',
          yellow:'var(--color-ui-yellow)'
        }
      },
      spacing: {
        sm: '24rem'
      },
      screens: {
        xxl: '1400px'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/components/**/*.vue',
      './src/layouts/**/*.vue',
      './src/pages/**/*.vue',
      './src/templates/**/*.vue',
      './src/gridsome.config.js'
    ]
  }
}