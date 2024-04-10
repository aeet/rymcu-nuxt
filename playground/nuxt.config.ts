export default defineNuxtConfig({
  modules: ['../src/module'],
  rymcu:{
    autoImport: {
      dirs: ['./types']
    }
  },
  devtools: { enabled: true }
})
