import globals from 'globals'
import { hasTypeScript } from '../env'
import { GLOB_ASTRO, GLOB_ASTRO_JS, GLOB_ASTRO_TS } from '../globs'
import { parserAstro, parserTypescript, pluginAstro, pluginStylistic } from '../plugins'
import type { FlatConfig } from '../types'

export interface AstroOptions {
    typescript?: boolean
}

export function astro(options: AstroOptions = {}): FlatConfig[] {
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
                ...Object.fromEntries(Object.keys(pluginStylistic.rules).map((rule) => [`style/${rule}`, 'off'])),
                'unicorn/text-encoding-identifier-case': 'off',
                'astro/no-set-text-directive': 'error',
                'astro/no-unused-css-selector': 'error',
            },
        },
        {
            files: [GLOB_ASTRO_JS, GLOB_ASTRO_TS],
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
                parser: typescriptParser,
            },
        },
    ]
}
