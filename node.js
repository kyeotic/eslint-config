'use strict'

let { rules } = require('./shared')

module.exports = {
  extends: ['recommended/node', 'prettier'],
  rules: {
    ...rules,
    'import/no-commonjs': 0,
    'import/no-nodejs-modules': 0,
  },
  parserOptions: {
    ecmaVersion: 9,
    env: {
      node: true,
    },
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
}
