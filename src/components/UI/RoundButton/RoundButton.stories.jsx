import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { IconUserCircle, IconCheveronDown } from '../../../icons/Icons';

import { RoundButton, RoundButtonReadme } from '..';

storiesOf('UI components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(RoundButtonReadme))
  .add('RoundButton', () => {
    let label;
    let defaultValue;

    label = 'text';
    defaultValue = 'Standup';
    const buttonText = text(label, defaultValue);

    label = 'iconBefore';
    defaultValue = true;
    const iconBefore = boolean(label, defaultValue);

    label = 'iconAfter';
    defaultValue = true;
    const iconAfter = boolean(label, defaultValue);

    label = 'loading';
    defaultValue = false;
    const loading = boolean(label, defaultValue);

    label = 'disabled';
    defaultValue = false;
    const disabled = boolean(label, defaultValue);

    return (
      <RoundButton
        iconBefore={iconBefore ? <IconCheveronDown /> : null}
        iconAfter={iconAfter ? <IconUserCircle /> : null}
        loading={loading}
        disabled={disabled}
      >
        {buttonText}
      </RoundButton>
    );
  });
