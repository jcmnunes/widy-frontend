import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import Day from '../Day';

const StyledDays = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

const Days = ({ days, order, selected, onClick }) => (
  <StyledDays>
    {order.map(id => (
      <Day key={id} onClick={() => onClick(id)} selected={id === selected}>
        {moment(days[id].day).format('ddd DD MMM YYYY')}
      </Day>
    ))}
  </StyledDays>
);

Days.propTypes = {
  days: PropTypes.shape({
    [PropTypes.string]: PropTypes.object,
  }).isRequired,
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Days;
