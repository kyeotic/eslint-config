module.exports = {
  extends: [
    'recommended/esnext',
    'recommended/esnext/style-guide',
    'recommended/node',
    'recommended/node/style-guide',
    'prettier'
  ],
  rules: {
    'prefer-const': 0
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true
    }
  }
}
