import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text } from '@storybook/addon-knobs';

import { MessageReadme } from '..';
import EditableInput from './EditableInput';

storiesOf('UI components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(MessageReadme))
  .add('EditableInput', () => {
    const label = 'initialValue';
    const defaultValue = 'Pellentesque Ligula Cras';
    const initialValue = text(label, defaultValue);

    return (
      <EditableInput
        initialValue={initialValue}
        action={() => console.log('action called')} // eslint-disable-line
      />
    );
  });
