import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended,
      'plugin:@typescript-eslint/eslint-recommended'
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'linebreak-style': 0,
      'lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: true,
      }],
      'brace-style': ['error', '1tbs'],
      curly: ['error', 'all'],
      quotes: ['error', 'single'],
    },
  },
)
