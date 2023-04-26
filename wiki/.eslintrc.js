module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "indent": ["error", "tab"],
    'max-len': ["warn", { "code": 110 }],
    "require-jsdoc": "warn",
    "no-unused-vars": "warn",
    "react/prop-types": ["warn"],
    "react/jsx-key": ["warn"]
  },
};
