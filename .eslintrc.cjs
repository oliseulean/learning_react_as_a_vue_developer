module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Add your custom rules here
    semi: ['error', 'always'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],
  },
  ignorePatterns: ['/dist/**', '/node_modules/**'],
};