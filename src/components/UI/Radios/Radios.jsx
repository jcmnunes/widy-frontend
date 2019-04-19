import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Radio, FormError } from '..';

const StyledRadios = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 12px;
  }
`;

const Radios = ({ intent, checkedId, data, error, onChange }) => {
  return (
    <>
      <StyledRadios>
        {data.map(({ id, label }) => (
          <Radio key={id} value={id} checked={checkedId === id} intent={intent} onChange={onChange}>
            {label}
          </Radio>
        ))}
      </StyledRadios>
      {error.length > 0 && <FormError>{error}</FormError>}
    </>
  );
};

Radios.defaultProps = {
  intent: 'neutral',
};

Radios.propTypes = {
  intent: PropTypes.oneOf(['primary', 'success', 'neutral']),
  checkedId: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Radios;
