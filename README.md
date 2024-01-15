# @kdt310722/eslint-config

> My personal ESLint config

## Installation

```bash
pnpm install -D @kdt310722/eslint-config
```

## Usage

### Create an ESLint configuration file:

With `"type": "module"` in your `package.json` (recommended):

```javascript
// eslint.config.js
import { defineFlatConfig } from '@kdt310722/eslint-config'

export default defineFlatConfig()
```

With CJS:

```javascript
// eslint.config.js
const { defineFlatConfig } = require('@kdt310722/eslint-config')

module.exports = defineFlatConfig()
```

## Credit

This ESLint configuration is inspired by the
excellent [`@antfu/eslint-config`](https://www.npmjs.com/package/@antfu/eslint-config) package. Special thanks to its
contributors!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
