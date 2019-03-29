import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import Day from '../Day';

const StyledDays = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

class Days extends Component {
  render() {
    const { days, order, selected, onClick } = this.props;
    return (
      <StyledDays>
        {order.map(id => (
          <Day key={id} onClick={() => onClick(id)} selected={id === selected}>
            {moment(days[id].day).format('ddd DD MMM YYYY')}
          </Day>
        ))}
      </StyledDays>
    );
  }
}

Days.propTypes = {
  days: PropTypes.object.isRequired,
  order: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Days;
