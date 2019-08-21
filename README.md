# eslint-config

My personal eslint configurations

## Installation

```shell
npm install @kyeotic/eslint-config eslint-plugin-react # peer deps must be installed
```

# Use for Browsers

```
"eslintConfig": {
    "extends": [
      "@kyeotic/eslint-config"
    ]
  }
```

# Use in Node

Add this to your `package.json`

```
"eslintConfig": {
    "extends": [
      "@kyeotic/eslint-config/node"
    ]
  }
```

# Recommended Prettier Config

Add this to your `package.json`

```
"prettier": {
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true
  },
```
