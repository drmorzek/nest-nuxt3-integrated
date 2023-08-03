import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    'backend': fileURLToPath(new URL('./backend', import.meta.url)),
    'public': fileURLToPath(new URL('./public', import.meta.url)),
    'src': fileURLToPath(new URL('./src', import.meta.url))
  },
  srcDir: './src',
  devtools: { enabled: true },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true
          }
        }
      }
    },
  },
})
