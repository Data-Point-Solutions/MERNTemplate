const eslintPluginImport = require('eslint-plugin-import')
const eslintPluginJsdoc = require('eslint-plugin-jsdoc')
const eslintPluginUnicorn = require('eslint-plugin-unicorn')
const eslintConfigGoogle = require('eslint-config-google')
const globals = require('globals')
const eslintConfigPrettier = require('eslint-config-prettier')
const eslintPluginJest = require('eslint-plugin-jest')

/** @type {import('eslint').Linter.Config} */
module.exports = [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      import: eslintPluginImport,
      jsdoc: eslintPluginJsdoc,
      security: eslintPluginSecurity,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      ...eslintConfigGoogle.rules,
      ...eslintConfigPrettier.rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginJsdoc.configs.recommended.rules,
      ...eslintPluginSecurity.configs.recommended.rules,
      ...eslintPluginUnicorn.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    plugins: {
      jest: eslintPluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...eslintPluginJest.configs.recommended.rules,
    },
  },
]
