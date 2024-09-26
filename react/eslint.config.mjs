import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginSecurity from 'eslint-plugin-security';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginJsdoc from 'eslint-plugin-jsdoc';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintConfigGoogle from 'eslint-config-google';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import eslintPluginJest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config} */
export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [eslintPluginReact.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
        },
        plugins: {
            'react-hooks': eslintPluginReactHooks,
            'react-refresh': eslintPluginReactRefresh,
            'import': eslintPluginImport,
            'jsx-a11y': eslintPluginJsxA11y,
            'jsdoc': eslintPluginJsdoc,
            'security': eslintPluginSecurity,
            'unicorn': eslintPluginUnicorn,
        },
        rules: {
            ...eslintConfigGoogle.configs.recommended.rules,
            ...eslintConfigPrettier.configs.recommended.rules,
            ...globals.browser,
            ...eslintPluginReact.configs.recommended.rules,
            ...eslintPluginReactHooks.configs.recommended.rules,
            ...eslintPluginReactRefresh.configs.recommended.rules,
            ...eslintPluginImport.configs.recommended.rules,
            ...eslintPluginJsxA11y.configs.recommended.rules,
            ...eslintPluginJsdoc.configs.recommended.rules,
            ...eslintPluginSecurity.configs.recommended.rules,
            ...eslintPluginUnicorn.configs.recommended.rules,
        },
        overrides: [
            {
                "files": ["src/**/*.test.{ts,tsx,js,jsx}"],
                "plugins": ["jest"],
                "env": {
                    "jest/globals": true,
                },
                "rules": {
                    ...eslintPluginJest.configs.recommended.rules,
                },
            },
        ],
    },
);