// eslint-disable-next-line unicorn/prefer-module
const ts = require('@teleskop150750/eslint-config-ts');
// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  root: ts.root,
  overrides: [
    ...ts.overrides,
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      rules: {
        // 'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
      globals: {
        Markdown: true,
      },
    },
  ],
  plugins: ['prettier'],
  extends: ['plugin:vue/vue3-recommended', '@teleskop150750/eslint-config-ts', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // Запретить использование посторонних пакетов
    'import/no-extraneous-dependencies': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
  },
};
