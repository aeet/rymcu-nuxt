import { addImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export type AutoImportOptions = {
  dirs: string[]
}

export type RymcuNuxtModuleOptions = {
  autoImport?: AutoImportOptions;
}

export default defineNuxtModule({
  meta: {
    name: '@rymcu/nuxt',
    configKey: 'rymcu',
  },
  setup: async (options: RymcuNuxtModuleOptions) => {
    if (options.autoImport) {
      const { dirs } = options.autoImport
      dirs.forEach(dir => {
        addImportsDir(createResolver(import.meta.url).resolve(dir))
      })
    }
  }
})
