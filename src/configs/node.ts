import { pluginNode } from '../plugins'
import type { FlatConfig } from '../types'
import { renameRules } from '../utils'

export function node(): FlatConfig[] {
    return [
        {
            plugins: { node: pluginNode },
            rules: {
                ...renameRules(pluginNode.configs['flat/recommended'].rules ?? {}, 'n/', 'node/'),
                'node/handle-callback-err': ['error', '^(err|error)$'],
                'node/hashbang': 'off',
                'node/no-missing-import': 'off',
                'node/no-missing-require': 'off',
                'node/no-new-require': 'error',
                'node/no-path-concat': 'error',
                'node/no-process-exit': 'off',
                'node/no-unpublished-import': 'off',
                'node/no-unpublished-require': 'off',
                'node/no-unsupported-features/node-builtins': 'off',
                'node/shebang': 'off',
            },
        },
    ]
}
