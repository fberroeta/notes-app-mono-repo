module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
    'jest': true,
    'browser': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'],

  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'allowImportExportEverywhere': true
		
  },
  'plugins': [
    'react', 
    'cypress'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-unused-vars':'off',
    'react/prop-types': 0 
  }
};
