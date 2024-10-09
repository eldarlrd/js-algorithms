// @ts-nocheck
import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import { flatConfigs } from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import nodePlugin from 'eslint-plugin-n';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import pluginPromise from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    flatConfigs.recommended,
    nodePlugin.configs['flat/recommended-module'],
    pluginPromise.configs['flat/recommended'],
    jsxA11y.flatConfigs.strict,
    eslintConfigPrettier
  ],
  files: ['**/*.{ts,tsx}'],
  settings: {
    react: { version: 'detect' },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { typescript: true, node: true }
  },
  languageOptions: {
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
      ...globals.es2024
    },
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      projectService: true
    }
  },
  plugins: {
    'no-relative-import-paths': noRelativeImportPaths,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/consistent-type-imports': [2, { fixStyle: 'inline-type-imports' }],
    'no-relative-import-paths/no-relative-import-paths': [2, { rootDir: 'src', prefix: '@' }],
    'import/order': [2, { 'newlines-between': 'always', alphabetize: { order: 'asc' } }],
    'import/consistent-type-specifier-style': [2, 'prefer-inline'],
    'import/extensions': [2, 'ignorePackages'],
    'import/no-named-as-default-member': 0,
    'import/no-useless-path-segments': 2,
    'import/no-named-as-default': 0,
    'import/no-default-export': 2,
    'import/group-exports': 2,
    'react/sort-comp': 2,
    'react/jsx-pascal-case': 2,
    'react/prefer-es6-class': 2,
    'react/jsx-boolean-value': 2,
    'react/self-closing-comp': 2,
    'react/no-unknown-property': 0,
    'react/prefer-stateless-function': 2,
    'react/no-multi-comp': [2, { 'ignoreStateless': true }],
    'react/jsx-no-bind': [2, { 'allowArrowFunctions': true }],
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': 2,
    'jest/no-deprecated-functions': 0,
    'n/no-missing-import': 0,
    'no-unused-vars': 0,
    'prefer-const': 2,
    eqeqeq: 2
  }
}) satisfies FlatConfig.ConfigArray;