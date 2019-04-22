import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Radios, RadiosReadme } from '..';

const RadiosExample = ({ intent }) => {
  const [checkedId, setCheckedId] = useState('');

  const onChange = e => {
    const { value } = e.target;
    setCheckedId(value);
  };

  return (
    <Radios
      intent={intent}
      checkedId={checkedId}
      data={[{ id: '1', label: 'Radio #1' }, { id: '2', label: 'Radio #2' }]}
      onChange={onChange}
      error=""
    />
  );
};

RadiosExample.propTypes = {
  intent: PropTypes.string.isRequired,
};

storiesOf('UI components', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(RadiosReadme))
  .add('Radios', () => {
    const label = 'intent';
    const options = {
      primary: 'primary',
      success: 'success',
      neutral: 'neutral',
    };
    const defaultValue = options.neutral;
    const intent = select(label, options, defaultValue);

    return <RadiosExample intent={intent} />;
  });
