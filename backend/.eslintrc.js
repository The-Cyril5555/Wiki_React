module.exports = {
   'env': {
      'browser': true,
      'commonjs': true,
      'es2021': true,
   },
   'extends': 'google',
   'overrides': [
   ],
   'parserOptions': {
      'ecmaVersion': 'latest',
   },
   'rules': {
      'indent': ['error', 3],
      'max-len': ['warn', {'code': 110}],
   },
};
