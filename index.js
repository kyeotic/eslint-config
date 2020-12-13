'use strict'

let { rules } = require('./shared')

module.exports = {
  extends: [
    'recommended/esnext',
    'recommended/esnext/style-guide',
    'recommended/node',
    'recommended/node/style-guide',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    ...rules,
    'sort-imports': 0,
    'import/extensions': ['error', 'ignorePackages'],
    'react/prop-types': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
}
