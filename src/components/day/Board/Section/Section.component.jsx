import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task';
import PlanTask from '../PlanTask/PlanTask.container';
import { Heading2 } from '../../../UI/Typography';
import { IllustrationPlan } from '../../../../icons/Illustrations';
import { IconAdd, SectionWithNoTasks, StyledLink, StyledSection, Tasks } from './Section.styles';

class SectionComponent extends Component {
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
    const { section, noTasks, dayId, sectionId, openCreateTaskModal } = this.props;
    return (
      <SectionWithNoTasks
        ref={provided.innerRef}
        {...provided.droppableProps}
        isDraggingOver={snapshot.isDraggingOver}
        isPlan={section.isPlan}
        onClick={openCreateTaskModal(dayId, sectionId)}
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
      </SectionWithNoTasks>
    );
  };

  render() {
    const { section, dayId, sectionId, openCreateTaskModal } = this.props;
    return (
      <StyledSection>
        <Heading2>{section.title}</Heading2>
        <Droppable droppableId={section.id}>
          {(provided, snapshot) =>
            section.tasks.length > 0
              ? this.renderSection(provided)
              : this.renderEmptySection(provided, snapshot)
          }
        </Droppable>
        <StyledLink
          intent="secondary"
          onClick={openCreateTaskModal(dayId, sectionId)}
          data-test="add-task-button"
        >
          <IconAdd /> {section.isPlan ? 'Add to Plan' : 'Add task'}
        </StyledLink>
      </StyledSection>
    );
  }
}

SectionComponent.propTypes = {
  dayId: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  noTasks: PropTypes.bool.isRequired,
  section: PropTypes.shape({
    tasks: PropTypes.array,
    title: PropTypes.string,
  }).isRequired,
  openCreateTaskModal: PropTypes.func.isRequired,
};

export default SectionComponent;
