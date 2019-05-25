module.exports = {
  extends: ['recommended/node', 'prettier'],
  rules: {
    'prefer-const': 0,
    'import/no-commonjs': 0,
    'import/no-nodejs-modules': 0
  },
  parserOptions: {
    ecmaVersion: 9,
    env: {
      node: true
    },
    ecmaFeatures: {
      defaultParams: true,
      spread: true
    }
  }
}
