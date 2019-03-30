import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Link, LinkReadme } from '..';

storiesOf('Miscellaneous components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(LinkReadme))
  .add('Link', () => {
    let label, options, defaultValue;

    label = 'intent';
    options = {
      default: null,
      success: 'success',
      warning: 'warning',
      error: 'error',
    };
    defaultValue = null;
    const intent = select(label, options, defaultValue);

    label = 'to';
    defaultValue = null;
    const to = text(label, defaultValue);

    label = 'text';
    defaultValue = 'Pharetra purus';
    const linkText = text(label, defaultValue);

    label = 'disabled';
    defaultValue = false;
    const disabled = boolean(label, defaultValue);

    return (
      <Link to={to} intent={intent} disabled={disabled}>
        {linkText}
      </Link>
    );
  });
