import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Macros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Macros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
        }),
        vueJsx: VueJsx(),
      },
    }),
  ],
})
