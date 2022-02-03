// eslint-disable-next-line unicorn/prefer-module
const ts = require('@teleskop150750/eslint-config-ts');
// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  plugins: ['vue', 'prettier'],
  extends: ['plugin:vue/vue3-recommended', '@teleskop150750/eslint-config-ts', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // импорт без расширения
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    // Запретить использование посторонних пакетов
    'import/no-extraneous-dependencies': 'off',
  },
  overrides: [
    ...ts.overrides,
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        node: true,
        browser: true,
        'vue/setup-compiler-macros': true,
      },
      rules: {
        'prettier/prettier': ['error'],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/script-setup-uses-vars': 'error',
        // 'no-unused-vars': 'off',
        // 'no-undef': 'off',
        // '@typescript-eslint/no-unused-vars': 'off',
      },
      globals: {
        Markdown: true,
      },
    },
  ],
};
