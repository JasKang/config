module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', require.resolve('./index')],
  settings: {
    react: {
      version: '18.0'
    }
  },
  rules: {}
};
