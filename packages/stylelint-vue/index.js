module.exports = {
  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true,
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {},
    },
  ],
  extends: ['@teleskop150750/stylelint-config-css', 'stylelint-config-html/vue'],
};
