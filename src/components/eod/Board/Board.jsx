import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import Section from './Section';
import ActionsTop from './ActionsTop';

const StyledBoard = styled.div`
  background: white;
  padding: 48px;

  h1 {
    font-size: 14px;
    color: ${props => props.theme.neutral700};

    .large-text {
      font-size: 20px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Board = ({ sections: { order, day }, dayId }) => (
  <StyledBoard>
    <Header>
      <h1>
        {dayId ? (
          <>
            <span className="large-text">{`${moment(day).format('ddd DD')}`} </span>
            <span>{`${moment(day).format('MMM YYYY')}`}</span>{' '}
          </>
        ) : (
          'Select a day'
        )}
      </h1>
      <ActionsTop />
    </Header>
    {dayId && order.map(id => <Section key={id} dayId={dayId} sectionId={id} />)}
  </StyledBoard>
);

Board.propTypes = {
  sections: PropTypes.shape({
    order: PropTypes.array,
    day: PropTypes.string,
  }).isRequired,
  dayId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  sections: state.sections,
  dayId: state.days.selected,
});

export default connect(mapStateToProps)(Board);
