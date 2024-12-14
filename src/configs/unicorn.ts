import { pluginUnicorn } from '../plugins'
import type { FlatConfig } from '../types'

export function unicorn(): FlatConfig[] {
    return [
        pluginUnicorn.configs['flat/recommended'] as any,
        {
            rules: {
                'unicorn/consistent-destructuring': 'off',
                'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
                'unicorn/filename-case': ['error', { cases: { kebabCase: true, pascalCase: true }, ignore: [String.raw`.*\.md$`] }],
                'unicorn/import-style': 'off',
                'unicorn/new-for-builtins': 'off',
                'unicorn/no-array-callback-reference': 'off',
                'unicorn/no-array-method-this-argument': 'off',
                'unicorn/no-array-push-push': 'off',
                'unicorn/no-array-reduce': 'off',
                'unicorn/no-await-expression-member': 'off',
                'unicorn/no-empty-file': 'off',
                'unicorn/no-null': 'off',
                'unicorn/no-process-exit': 'off',
                'unicorn/prefer-event-target': 'off',
                'unicorn/prefer-math-min-max': 'off',
                'unicorn/prefer-module': 'off',
                'unicorn/prefer-top-level-await': 'off',
                'unicorn/prevent-abbreviations': 'off',
                'unicorn/require-number-to-fixed-digits-argument': 'off',
                'unicorn/switch-case-braces': ['error', 'avoid'],
            },
        },
    ]
}
