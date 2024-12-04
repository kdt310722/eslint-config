import { pluginSonarJs } from '../plugins'
import type { FlatConfig } from '../types'

export function sonarjs(): FlatConfig[] {
    return [
        {
            plugins: { sonarjs: pluginSonarJs },
            rules: {
                ...pluginSonarJs.configs.recommended.rules,
                'sonarjs/arguments-order': 'off',
                'sonarjs/cognitive-complexity': 'off',
                'sonarjs/function-return-type': 'off',
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/no-nested-template-literals': 'off',
                'sonarjs/pseudo-random': 'off',
                'sonarjs/redundant-type-aliases': 'off',
                'sonarjs/assertions-in-tests': 'off',
                'sonarjs/updated-loop-counter': 'off',
                'sonarjs/no-nested-assignment': 'off',
            },
        },
    ]
}
