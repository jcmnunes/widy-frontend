import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import Section from './Section';
import { IconUserCircle } from '../../../icons/Icons';

const StyledBoard = styled.div`
  background: white;
  padding: 48px;

  h1 {
    font-size: 14px;
    color: ${props => props.theme.neutral700};
    margin-bottom: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class Board extends Component {
  render() {
    const {
      sections: { byId, order, day },
      dayId,
    } = this.props;
    return (
      <StyledBoard>
        <Header>
          <h1>{dayId ? moment(day).format('ddd DD MMM YYYY') : 'Select a day'}</h1>
          <div className="actions">
            <IconUserCircle size={32} />
          </div>
        </Header>
        {dayId &&
          order.map(id => <Section key={id} title={byId[id].title} dayId={dayId} sectionId={id} />)}
      </StyledBoard>
    );
  }
}

const mapStateToProps = state => ({
  sections: state.sections,
  dayId: state.days.selected,
});

export default connect(mapStateToProps)(Board);
