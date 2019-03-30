import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Checkbox, CheckboxReadme } from './';

storiesOf('Miscellaneous components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(CheckboxReadme))
  .add('Checkbox', () => {
    let label, defaultValue, options;

    label = 'children';
    defaultValue = 'Integer posuere erat';
    const labelText = text(label, defaultValue);

    label = 'intent';
    options = {
      primary: 'primary',
      success: 'success',
    };
    defaultValue = null;
    const intent = select(label, options, defaultValue);

    return <Checkbox intent={intent}>{labelText}</Checkbox>;
  });
