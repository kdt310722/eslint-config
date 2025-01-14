import { pluginPromise } from '../plugins'
import type { FlatConfig } from '../types'

export function promise(): FlatConfig[] {
    return [
        {
            plugins: { promise: pluginPromise },
            rules: {
                ...pluginPromise.configs.recommended.rules,
                'promise/always-return': 'off',
                'promise/catch-or-return': 'off',
                'promise/no-multiple-resolved': 'error',
                'promise/no-nesting': 'off',
                'promise/no-promise-in-callback': 'off',
            },
        },
    ]
}
