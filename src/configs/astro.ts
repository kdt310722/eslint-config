import globals from 'globals'
import { hasTypeScript } from '../env'
import { GLOB_ASTRO, GLOB_ASTRO_JS, GLOB_ASTRO_TS } from '../globs'
import { parserAstro, parserTypescript, pluginAstro } from '../plugins'
import type { FlatConfig, StyleOptions } from '../types'

export interface AstroOptions {
    typescript?: boolean
}

export function astro(options: AstroOptions = {}, styleOptions: StyleOptions = {}): FlatConfig[] {
    const { typescript = hasTypeScript } = options
    const typescriptParser = typescript ? parserTypescript as any : undefined

    return [
        { plugins: { astro: pluginAstro } },
        {
            files: [GLOB_ASTRO],
            languageOptions: {
                globals: {
                    ...globals.node,
                    ...globals.es2020,
                    ...pluginAstro.environments.astro.globals,
                },
                parser: parserAstro,
                parserOptions: {
                    extraFileExtensions: ['.astro'],
                    parser: typescriptParser,
                    sourceType: 'module',
                },
            },
            rules: {
                ...(pluginAstro.configs.recommended.rules as any),
                'astro/no-set-text-directive': 'error',
                'astro/no-unused-css-selector': 'error',
                'astro/semi': ['error', styleOptions.semi ? 'always' : 'never'],
            },
        },
        {
            files: [GLOB_ASTRO_JS],
            languageOptions: {
                globals: {
                    ...globals.browser,
                    ...globals.es2020,
                },
                parserOptions: {
                    sourceType: 'module',
                },
            },
        },
        {
            files: [GLOB_ASTRO_TS],
            languageOptions: {
                globals: {
                    ...globals.browser,
                    ...globals.es2020,
                },
                parser: typescriptParser,
                parserOptions: {
                    sourceType: 'module',
                    project: null,
                },
            },
        },
    ]
}
