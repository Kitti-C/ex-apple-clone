module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'tailwindcss'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'no-console': 0,
    'tailwindcss/no-custom-classname': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
