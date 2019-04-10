import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';

import { LoadingElement, LoadingElementReadme } from '..';

storiesOf('UI components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(LoadingElementReadme))
  .add('LoadingElement', () => {
    let label;
    let defaultValue;

    label = 'width';
    defaultValue = '200px';
    const width = text(label, defaultValue);

    label = 'height';
    defaultValue = '50px';
    const height = text(label, defaultValue);

    label = 'circular';
    defaultValue = false;
    const circular = boolean(label, defaultValue);

    label = 'background';
    defaultValue = '#E4E7EB';
    const background = color(label, defaultValue);

    return (
      <LoadingElement width={width} height={height} circular={circular} background={background} />
    );
  });
