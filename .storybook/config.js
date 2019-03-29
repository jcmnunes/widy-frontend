import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/Global';

const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withOptions({ name: 'widy', url: 'https://josenunes.xyz', addonPanelInRight: true }));
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div>
      {story()}
      <GlobalStyle />
    </div>
  </ThemeProvider>
));
addDecorator(withKnobs);
addDecorator(StoryRouter());

configure(loadStories, module);
