import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'
// import Components from 'unplugin-vue-components/vite'
// import {
//   AntDesignVueResolver
// } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    eslintPlugin()

    // 自动导入
    // Components({
    //   resolvers: [
    //     AntDesignVueResolver()
    //   ],
    //   dts: 'src/components.d.ts',
    //   include: [/\.vue$/, /\.vue\?vue/],
    //   exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
    // })
  ]
})
