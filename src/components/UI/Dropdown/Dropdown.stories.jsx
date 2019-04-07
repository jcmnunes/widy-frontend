import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { Dropdown, StyledDropdown, DropdownReadme, RoundButton, Button } from '..';
import { IconUserCircle, IconCheveronDown, IconDoorExit, IconUser } from '../../../icons/Icons';

storiesOf('UI components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(DropdownReadme))
  .add('Dropdown', () => {
    const Trigger = (
      <RoundButton iconBefore={<IconCheveronDown />} iconAfter={<IconUserCircle />} />
    );

    let label;
    let defaultValue;

    label = 'position';
    const options = {
      left: 'left',
      right: 'right',
    };
    defaultValue = null;
    const position = select(label, options, defaultValue);

    label = 'closeOnAction';
    defaultValue = false;
    const closeOnAction = boolean(label, defaultValue);

    return (
      <Dropdown trigger={Trigger} position={position} closeOnAction={closeOnAction}>
        <StyledDropdown>
          <Button intent="dropdown" iconBefore={<IconUser />} block>
            Edit profile
          </Button>
          <Button intent="dropdown" iconBefore={<IconDoorExit />} block>
            Log out
          </Button>
        </StyledDropdown>
      </Dropdown>
    );
  });
