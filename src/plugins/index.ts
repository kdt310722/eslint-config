import formatPlugin from 'eslint-plugin-format'
import * as pluginReactHooks from 'eslint-plugin-react-hooks'
import * as pluginTailwindCSS from 'eslint-plugin-tailwindcss'

export { default as pluginAntfu } from 'eslint-plugin-antfu'
export { default as pluginAstro } from 'eslint-plugin-astro'
export { default as pluginComments } from 'eslint-plugin-eslint-comments'
export { default as pluginFormat } from 'eslint-plugin-format'
export { default as pluginImport } from 'eslint-plugin-import-x'
export { default as pluginJSDoc } from 'eslint-plugin-jsdoc'
export { default as pluginJsonc } from 'eslint-plugin-jsonc'
export { default as pluginKDT } from './kdt'
export { default as pluginMarkdown } from 'eslint-plugin-markdown'
export { default as pluginNode } from 'eslint-plugin-n'
export { default as pluginPerfectionist } from 'eslint-plugin-perfectionist'
export { default as pluginPromise } from 'eslint-plugin-promise'
export { default as pluginReact } from 'eslint-plugin-react'
export { default as pluginReactRefresh } from 'eslint-plugin-react-refresh'
export { default as pluginSonarJs } from 'eslint-plugin-sonarjs'
export { default as pluginStylistic } from '@stylistic/eslint-plugin'
export { default as pluginTypescript } from '@typescript-eslint/eslint-plugin'
export { default as pluginUnicorn } from 'eslint-plugin-unicorn'
export { default as pluginUnoCSS } from '@unocss/eslint-plugin'
export { default as pluginUnusedImports } from 'eslint-plugin-unused-imports'
export { default as pluginVue } from 'eslint-plugin-vue'

export const parserPlain = formatPlugin.parserPlain as any

export { default as parserAstro } from 'astro-eslint-parser'
export { default as parserJsonc } from 'jsonc-eslint-parser'
export { default as parserTypescript } from '@typescript-eslint/parser'
export { default as parserVue } from 'vue-eslint-parser'

// eslint-disable-next-line unicorn/prefer-export-from
export { pluginReactHooks, pluginTailwindCSS }
