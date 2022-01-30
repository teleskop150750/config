// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    '@teleskop150750/stylelint-config-css',
    'stylelint-config-html/vue',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    'prettier/prettier': true,
  },
};
