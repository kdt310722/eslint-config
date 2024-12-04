import { pluginSonarJs } from '../plugins'
import type { FlatConfig } from '../types'

export function sonarjs(): FlatConfig[] {
    return [
        {
            plugins: { sonarjs: pluginSonarJs },
            rules: {
                ...pluginSonarJs.configs.recommended.rules,
                'sonarjs/cognitive-complexity': 'off',
                'sonarjs/function-return-type': 'off',
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/no-nested-template-literals': 'off',
                'sonarjs/redundant-type-aliases': 'off',
            },
        },
    ]
}
