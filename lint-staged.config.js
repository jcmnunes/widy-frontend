module.exports = {
  linters: {
    '**/*.+(js|jsx|md)': ['eslint --fix', 'prettier --write', 'jest --findRelatedTests', 'git add'],
  },
};
