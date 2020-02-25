module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // arrumar no futuro
    '@typescript-eslint/no-explicit-any': ['off', { ignoreRestArgs: false }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    'import/extensions': ['error', 'never'],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/prop-types': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'import/prefer-default-export': 'off',
    // 'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-unused-vars': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'no-console': ['error', { allow: ['tron'] }],

    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.ts', 'src/utils/tests/*.ts'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    'import/extensions': ['.ts', '.js', '.jsx', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js', '.jsx', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
