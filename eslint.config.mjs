import js from '@eslint/js'
import globals from 'globals'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.json',
        },
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintReact.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      },
    },
  },
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      '.git/**',
      '.vscode/**',
      'package.json',
      'package-lock.json',
      'next.config.mjs',
      'eslint.config.mjs',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      // Неиспользуемые переменных в коде
      '@typescript-eslint/no-unused-vars': 'warn',
      // Точка с запятой в конце каждой строки
      'prettier/prettier': ['off', { semi: false }],
      // Использование JSX без импорта React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      // Компоненты и HTML-элементы без детей болжны быть	 самозакрывающимися
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      // Ограничение длины строки с исключениями
      'max-len': [
        'error',
        {
          code: 80,
          ignoreTemplateLiterals: true,
          ignoreStrings: true,
          ignoreComments: true,
          ignoreTrailingComments: true,
        },
      ],
      // Порядок импортов
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      // Запрещает вложенные тернарные операторы
      'no-nested-ternary': 'error',
      // Использовать шаблонные строки (`Hello, ${name}`) вместо конкатенации строк ('Hello, ' + name)
      'prefer-template': 'error',
      // Пустая строка перед return
      'newline-before-return': 'error',
      // Пустые строки внутри блоков
      'padded-blocks': 'off',
      // Ограничение количества пустых строк до одной
      'no-multiple-empty-lines': ['error', { max: 1 }],
      // Ошибка, если переменная затеняет (перекрывает) другую переменную с тем же именем в области видимости
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      // Использование ++ для инкрементации
      'no-plusplus': 'off',
      // Использование типа any
      '@typescript-eslint/no-explicit-any': 'warn',
      // FIXME: Проверить и исправить все ошибки линтера "eslintimport/named"
      'import/named': 'off',
    },
  },
)
