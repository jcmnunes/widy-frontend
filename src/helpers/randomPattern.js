import theme from '../styles/theme';

export default () => {
  const { patterns } = theme;
  const numOfPatterns = theme.patterns.length;
  const randomIndex = Math.floor(Math.random() * numOfPatterns);

  return patterns[randomIndex];
};
