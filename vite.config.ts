import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import Pages from "vite-plugin-pages"

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: (
    process.env.DEPLOY_TO === "gh-pages" ? "/li-learn-timer-app/" : "/"
  ),
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    Pages({
      dirs: [
        {
          dir: 'src/pages', baseRoute: (
            process.env.DEPLOY_TO === "gh-pages" ? "li-learn-timer-app" : ""
          )
        },
      ],
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
