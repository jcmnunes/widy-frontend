import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components/macro';
import moment from 'moment';
import Section from './Section';
import ActionsTop from './ActionsTop';
import LoadingBoard from './LoadingBoard';
import NoDays from '../NoDays';

const StyledBoard = styled.div`
  position: relative;
  background: white;
  padding: 0 48px 48px;
  height: 100vh;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 14px;
  color: ${props => props.theme.neutral700};
}
`;

const LargeText = styled.span`
  font-size: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  z-index: 90;
  top: 0;
  padding-top: 48px;
  background: white;
`;

class Board extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    const { sections, activeTaskId } = this.props;

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
      const sectionsById = sections.byId;
      // When moving a task to the Plan we should stop it
      if (sectionsById[toSectionId].isPlan) {
        this.props.updateTaskInStore(draggableId, { time: 0, start: null });
        // The task was active
        if (draggableId === activeTaskId) {
          this.props.resetActiveTask();
        }
      }
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
      daysOrder,
      daysLoading,
    } = this.props;
    return loading || daysLoading ? (
      <LoadingBoard />
    ) : (
      <StyledBoard>
        <Header>
          <Title>
            {dayId ? (
              <>
                <LargeText>{`${moment(day).format('ddd DD')}`} </LargeText>
                <span>{`${moment(day).format('MMM YYYY')}`}</span>{' '}
              </>
            ) : (
              ''
            )}
          </Title>
          <ActionsTop noDays={daysOrder.length === 0} />
        </Header>
        {daysOrder.length === 0 ? (
          <NoDays />
        ) : (
          <DragDropContext onDragEnd={this.onDragEnd}>
            {dayId && order.map(id => <Section key={id} dayId={dayId} sectionId={id} />)}
          </DragDropContext>
        )}
      </StyledBoard>
    );
  }
}

Board.propTypes = {
  sections: PropTypes.shape({
    order: PropTypes.array,
    day: PropTypes.string,
    loading: PropTypes.bool,
    byId: PropTypes.shape({
      [PropTypes.string]: PropTypes.object,
    }).isRequired,
  }).isRequired,
  dayId: PropTypes.string.isRequired,
  activeTaskId: PropTypes.string.isRequired,
  daysOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  daysLoading: PropTypes.bool.isRequired,
  reorderTasksArray: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  addTaskAtIndex: PropTypes.func.isRequired,
  moveTask: PropTypes.func.isRequired,
  updateTaskInStore: PropTypes.func.isRequired,
  resetActiveTask: PropTypes.func.isRequired,
};

export default Board;
