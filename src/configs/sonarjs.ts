import { pluginSonarJs } from '../plugins'
import type { FlatConfig } from '../types'

export function sonarjs(): FlatConfig[] {
    return [
        {
            plugins: { sonarjs: pluginSonarJs },
            rules: {
                ...pluginSonarJs.configs.recommended.rules,
                'sonarjs/cognitive-complexity': 'off',
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/no-nested-template-literals': 'off',
            },
        },
    ]
}
