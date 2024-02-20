module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  "extends": "standard-with-typescript",
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        'src/**/*.ts',
        'index.ts',
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    '@typescript-eslint/no-unused-vars': 'warn',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
  "ignorePatterns": [
    ".eslintrc.cjs",
    "node_modules",
    "dist"
  ],
};