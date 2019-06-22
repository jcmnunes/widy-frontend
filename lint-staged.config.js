module.exports = {
  linters: {
    '**/*.+(js|jsx)': ['npm run lint', 'prettier --write', 'git add'],
  },
};
