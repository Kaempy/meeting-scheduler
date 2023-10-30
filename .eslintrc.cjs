module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'prettier.config.cjs',
    '*.config.js',
    '*.config.cjs',
    '*.config.ts',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 0,
    'arrow-body-style': 0,
    'react/jsx-fragments': ['error', 'element'],
    'react/require-default-props': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-absolute-path': 'off',
    'react/function-component-definition': [
      0,

      {
        namedComponents:
          'function-declaration' | 'function-expression' | 'arrow-function',
        unnamedComponents: 'function-expression' | 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
