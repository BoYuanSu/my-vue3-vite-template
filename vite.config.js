import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'

import gitVersionTag from 'git-tag-version'

import path from 'path'

const env = loadEnv('', process.cwd())

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    visualizer({
      open: env.VITE_SHOW_STATS === 'true'
    })
  ],
  resolve: {
    extensions: ['.vue', '.scss', '.json', 'js'], // allow import skip *.vue *.scss
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    VITE_APP_VERSION: JSON.stringify(gitVersionTag())
  }
})

// 類似存取 process.env，但是改為存取 custom.env
// export default ({ mode }) => {
//   const customEnv = {
//     NODE_ENV: mode,
//     ...loadEnv(mode, process.cwd())
//   }
//   return defineConfig({
//     plugins: [
//       vue(),
//       eslintPlugin()
//     ],
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, './src')
//       }
//     },
//     define: {
//       __APP_VERSION__: JSON.stringify(gitVersionTag()),
//       'custom.env': JSON.stringify(customEnv)
//     }
//   })
// }
