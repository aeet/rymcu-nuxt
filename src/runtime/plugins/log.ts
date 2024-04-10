import { defineNuxtPlugin } from "nuxt/app";

export const log = defineNuxtPlugin((nuxtApp) => {
  console.log('log load')
})
