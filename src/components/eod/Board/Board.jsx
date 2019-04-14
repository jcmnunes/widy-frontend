import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import moment from 'moment';
import Section from './Section';
import ActionsTop from './ActionsTop';
import LoadingBoard from './LoadingBoard';

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

class Board extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    const fromSectionId = source.droppableId;
    const toSectionId = destination.droppableId;
    const fromIndex = source.index;
    const toIndex = destination.index;

    if (fromSectionId === toSectionId && fromIndex === toIndex) return;

    // Same section
    if (destination.droppableId === source.droppableId) {
      this.props.reorderTasksArray(fromSectionId, fromIndex, toIndex);
    } else {
      this.props.removeTask(fromSectionId, fromIndex);
      this.props.addTaskAtIndex(toSectionId, toIndex, draggableId);
    }

    // Make API call
    this.props.moveTask(draggableId, fromSectionId, toSectionId, fromIndex, toIndex);
  };

  render() {
    const {
      sections: { order, day, loading },
      dayId,
      daysLoading,
    } = this.props;
    return loading || daysLoading ? (
      <LoadingBoard />
    ) : (
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
        <DragDropContext onDragEnd={this.onDragEnd}>
          {dayId && order.map(id => <Section key={id} dayId={dayId} sectionId={id} />)}
        </DragDropContext>
      </StyledBoard>
    );
  }
}

Board.propTypes = {
  sections: PropTypes.shape({
    order: PropTypes.array,
    day: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  dayId: PropTypes.string.isRequired,
  daysLoading: PropTypes.bool.isRequired,
  reorderTasksArray: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  addTaskAtIndex: PropTypes.func.isRequired,
  moveTask: PropTypes.func.isRequired,
};

export default Board;
