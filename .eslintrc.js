module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json',
    'tsconfigRootDir': __dirname,
    'createDefaultProgram': true
  },
  'plugins': [
    '@typescript-eslint',
    'prettier'
  ],
  'rules': {
    'no-console': ['warn', { allow: ['warn', 'error', 'time', 'timeEnd'] }],
    'no-magic-numbers': ['error', { 'ignoreArrayIndexes': true, 'ignoreDefaultValues': true }],
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: false, ignoreImports: true }],
    'default-case': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/array-type': ['error', { 'default': 'array' }],
    '@typescript-eslint/brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/func-call-spacing': 'error',
    // 'max-len': ['error', { 'code': 120, 'tabWidth': 2, 'ignoreComments': true, 'ignoreStrings': true }],
    //eslint-disable-next-line
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': ['error', { 'allowSingleExtends': false }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-parens': 'off',
    'eol-last': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-trailing-spaces': 'error',
    'object-curly-spacing' : ['error', 'always'],
    '@typescript-eslint/comma-spacing': ['error'],
    'space-infix-ops': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    // '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': ['error', { 'allowDefinitionFiles': true }],
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': ['error',
      { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off'
  }
};
