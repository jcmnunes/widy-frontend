import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task';
import PlanTask from '../PlanTask';
import { Link } from '../../../UI';
import { Heading2 } from '../../../UI/Typography';
import { ADD_TASK } from '../../../modals/types';
import { IconAdd } from '../../../../icons/Icons';
import theme from '../../../../styles/theme';
import { IllustrationPlan } from '../../../../icons/Illustrations';

const StyledSection = styled.div`
  margin: 32px 0;
`;

const EmptyTasks = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.neutral100};
  border-radius: 4px;
  height: ${props => (props.isPlan && props.noTasks ? '275px' : '96px')};
  background-color: ${props => (props.isDraggingOver ? props.theme.neutral050 : 'white')};
  transition: background-color 0.2s ease;
  font-size: 16px;
  color: ${props => props.theme.neutral300};
  font-style: italic;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.neutral050};
  }
`;
EmptyTasks.displayName = 'EmptyTasks';

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
`;
Tasks.displayName = 'Tasks';

const StyledLink = styled(Link)`
  margin-top: 12px;
`;

class Section extends Component {
  openModal = () => {
    const { dayId, sectionId } = this.props;
    this.props.storeCreateTaskData(dayId, sectionId);
    this.props.openModal(ADD_TASK);
  };

  renderSection = provided => {
    const { section } = this.props;
    return (
      <Tasks ref={provided.innerRef} {...provided.droppableProps}>
        {section.tasks.map((taskId, index) => {
          if (section.isPlan) {
            return <PlanTask key={taskId} taskId={taskId} index={index} sectionId={section.id} />;
          }
          return <Task key={taskId} taskId={taskId} index={index} sectionId={section.id} />;
        })}
        {provided.placeholder}
      </Tasks>
    );
  };

  renderEmptySection = (provided, snapshot) => {
    const { section, noTasks } = this.props;
    return (
      <EmptyTasks
        ref={provided.innerRef}
        {...provided.droppableProps}
        isDraggingOver={snapshot.isDraggingOver}
        isPlan={section.isPlan}
        onClick={this.openModal}
        noTasks={noTasks}
      >
        {section.isPlan && (
          <>
            {noTasks && <IllustrationPlan />}
            {noTasks ? (
              <span>Start by adding tasks here to plan your day.</span>
            ) : (
              <span>No tasks in Plan.</span>
            )}
          </>
        )}
        {!section.isPlan &&
          (snapshot.isDraggingOver ? (
            <span>Add task to section &quot;{section.title}&quot;</span>
          ) : (
            <span>No tasks in section &quot;{section.title}&quot;</span>
          ))}
      </EmptyTasks>
    );
  };

  render() {
    const { section } = this.props;
    return (
      <StyledSection>
        <Heading2>{section.title}</Heading2>
        <Droppable droppableId={section.id}>
          {(provided, snapshot) =>
            section.tasks.length
              ? this.renderSection(provided)
              : this.renderEmptySection(provided, snapshot)
          }
        </Droppable>
        <StyledLink intent="secondary" onClick={this.openModal}>
          <IconAdd primaryColor={theme.neutral500} /> {section.isPlan ? 'Add to Plan' : 'Add task'}
        </StyledLink>
      </StyledSection>
    );
  }
}

Section.propTypes = {
  dayId: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  storeCreateTaskData: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  section: PropTypes.shape({
    tasks: PropTypes.array,
    title: PropTypes.string,
  }).isRequired,
  noTasks: PropTypes.bool.isRequired,
};

export default Section;
