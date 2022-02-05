// Copy from https://github.com/paralenz/eslint-config-typescript-react
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json'
  },
  extends: [
    'standard',
    'standard-jsx',
    'standard-react',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'react',
    'import',
    'eslint-plugin-react',
    '@typescript-eslint',
    'no-unused-react-component-methods',
    'react-hooks'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    "@typescript-eslint/no-unused-vars": "off",
    'react/no-did-update-set-state': 'off',
    'react/jsx-handler-names': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'keyword-spacing': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/jsx-indent': ['error', 2, {
      checkAttributes: true,
      indentLogicalExpressions: true
    }],
    eqeqeq: ['error', 'always'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'always' }],
    indent: ['error', 2,
      {
        SwitchCase: 1,
        ignoreComments: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild'
        ]
      }
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'max-len': ['error', 120],
    "camelcase": "off",
    "@typescript-eslint/naming-convention": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": 0
  }
}