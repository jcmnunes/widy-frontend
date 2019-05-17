import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Message, MessageReadme } from '..';

storiesOf('UI components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(MessageReadme))
  .add('Message', () => {
    let label;
    let defaultValue;

    label = 'intent';
    const options = {
      default: null,
      success: 'success',
      warning: 'warning',
      error: 'error',
    };
    defaultValue = null;
    const intent = select(label, options, defaultValue);

    label = 'message';
    defaultValue = 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.';
    const message = text(label, defaultValue);

    return <Message intent={intent}>{message}</Message>;
  });
