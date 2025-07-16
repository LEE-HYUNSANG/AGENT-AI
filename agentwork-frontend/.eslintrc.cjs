module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  env: { browser: true, es2021: true, node: true },
  settings: { react: { version: 'detect' } },
};
