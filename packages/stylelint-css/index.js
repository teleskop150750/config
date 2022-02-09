const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  plugins: ['stylelint-order', 'stylelint-color-format', 'stylelint-declaration-block-no-ignored-properties'],
  extends: ['stylelint-config-standard'],
  rules: {
    'color-format/format': {
      format: 'hsl',
    },
    'color-function-notation': 'modern',
    'plugin/declaration-block-no-ignored-properties': true,
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
    'declaration-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'after-declaration', 'first-nested', 'inside-single-line-block'],
      },
    ],

    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        message: 'Селектор не по БЭМ',
      },
    ],
    'declaration-colon-newline-after': 'always-multi-line',
  },
};
