import type { FlatConfig } from '../types'
import { pluginTailwindCSS } from '../plugins'

export function tailwindcss(): FlatConfig[] {
    return [
        {
            plugins: { tailwindcss: pluginTailwindCSS },
            rules: {
                ...pluginTailwindCSS.rules,
                'tailwindcss/no-custom-classname': 'off',
            },
        },
    ]
}
