export const GLOB_SRC_EXT = '?([cm])[jt]s?(x)'
export const GLOB_SRC = '**/*.?([cm])[jt]s?(x)'

export const GLOB_JS = '**/*.?([cm])js'
export const GLOB_JSX = '**/*.?([cm])jsx'

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_STYLE = '**/*.{c,le,sc}ss'
export const GLOB_CSS = '**/*.css'
export const GLOB_POSTCSS = '**/*.{p,post}css'
export const GLOB_LESS = '**/*.less'
export const GLOB_SCSS = '**/*.scss'

export const GLOB_JSON = '**/*.json'
export const GLOB_JSON5 = '**/*.json5'
export const GLOB_JSONC = '**/*.jsonc'

export const GLOB_MARKDOWN = '**/*.md'
export const GLOB_MARKDOWN_IN_MARKDOWN = '**/*.md/*.md'
export const GLOB_MARKDOWN_CODE = `${GLOB_MARKDOWN}/${GLOB_SRC}`

export const GLOB_VUE = '**/*.vue'
export const GLOB_YAML = '**/*.y?(a)ml'
export const GLOB_TOML = '**/*.toml'
export const GLOB_HTML = '**/*.htm?(l)'
export const GLOB_GRAPHQL = '**/*.graphql'
export const GLOB_MDX = '**/*.mdx'

export const GLOB_ASTRO = '**/*.astro'
export const GLOB_ASTRO_JS = `${GLOB_ASTRO}/*.js`
export const GLOB_ASTRO_TS = `${GLOB_ASTRO}/*.ts`

export const GLOB_ALL_SRC = [
    GLOB_SRC,
    GLOB_STYLE,
    GLOB_JSON,
    GLOB_JSON5,
    GLOB_MARKDOWN,
    GLOB_VUE,
    GLOB_YAML,
    GLOB_HTML,
    GLOB_ASTRO,
]

export const GLOB_EXCLUDE = [
    '**/*.min.*',
    '**/.cache',
    '**/.changeset',
    '**/.history',
    '**/.idea',
    '**/.next',
    '**/.nuxt',
    '**/.output',
    '**/.temp',
    '**/.tmp',
    '**/.vercel',
    '**/.vite-inspect',
    '**/.vitepress/cache',
    '**/.vscode',
    '**/__snapshots__',
    '**/auto-import?(s).d.ts',
    '**/bun.lockb',
    '**/CHANGELOG*.md',
    '**/components.d.ts',
    '**/coverage',
    '**/dist',
    '**/LICENSE*',
    '**/node_modules',
    '**/out',
    '**/output',
    '**/package-lock.json',
    '**/pnpm-lock.yaml',
    '**/public',
    '**/temp',
    '**/tmp',
    '**/typed-router.d.ts',
    '**/yarn.lock',
]
