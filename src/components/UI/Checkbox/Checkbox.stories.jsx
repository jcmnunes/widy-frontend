import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Checkbox, CheckboxReadme } from '..';

storiesOf('UI components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(CheckboxReadme))
  .add('Checkbox', () => {
    let label;
    let defaultValue;

    label = 'children';
    defaultValue = 'Integer posuere erat';
    const labelText = text(label, defaultValue);

    label = 'intent';
    const options = {
      primary: 'primary',
      success: 'success',
      neutral: 'neutral',
    };
    defaultValue = options.neutral;
    const intent = select(label, options, defaultValue);

    return <Checkbox intent={intent}>{labelText}</Checkbox>;
  });
