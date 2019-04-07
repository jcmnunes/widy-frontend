module.exports = {
  linters: {
    '**/*.+(js|jsx|md)': ['eslint --fix', 'prettier --write', 'git add'],
  },
};
