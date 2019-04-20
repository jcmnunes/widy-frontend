/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Dialog, DialogReadme } from '..';

storiesOf('UI components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(DialogReadme))
  .add('Dialog', () => {
    const actions = [
      {
        name: 'Cancel',
        intent: 'secondary',
        action: () => console.log('Cancel action'),
      },
      {
        name: 'Delete',
        intent: 'error',
        action: () => console.log('Delete action'),
      },
    ];

    const label = 'show dialog';
    const defaultValue = false;
    const show = boolean(label, defaultValue);

    return (
      show && (
        <Dialog actions={actions} handleClose={() => console.log('handleOnClose called')}>
          Lorem ipsum dolor?
        </Dialog>
      )
    );
  });
