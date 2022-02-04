const js = require('@teleskop150750/eslint-config-js');

module.exports = {
  root: true,
  extends: [
    '@teleskop150750/eslint-config-js',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // TS
    /**
     * Запрещает использование комментариев или
     * требует описаний после директивы (@ts-<directive>ban-ts-comment)
     */
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    // Требовать согласованного интервала вокруг аннотаций типов
    '@typescript-eslint/type-annotation-spacing': 'error',
    // Обеспечивает согласованное использование импорта типов
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    // Согласуется с определением типа либо или interface type (consistent-type-definitions)
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // Принудительное применение или запрет на использование типа записи Record<string, unknown>;
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    // Рекомендует использовать более @ts-expect-error@ts-ignore
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Override JS
    // Запретить ненужные конструкторы (no-useless-constructor
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    // indent
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    // no-unused-vars
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // нет-повторное объявление
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    // не используется до определения
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    // Скобочный стиль
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    // висячие запятые
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    // объектно-фигурный-интервал
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    // off
    //   constructor(private foo: string) {}
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    // Запрещает использование комментариев
    // или требует описаний после директивы (@ts-<directive>ban-ts-comment)
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // !no-non-null-assertion
    // '@typescript-eslint/no-non-null-assertion': 'off',

    // '@typescript-eslint/ban-types': 'off',
    // Запрещает использование определенных типов (ban-types) Number String
    // '@typescript-eslint/no-namespace': 'off',
  },
  overrides: [
    ...js.overrides,
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
