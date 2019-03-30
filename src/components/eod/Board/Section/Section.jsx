import React, { Component } from 'react';
import styled from 'styled-components';
import Task from '../Task/Task';
import Link from '../../../UI/Link';
import { ADD_TASK } from '../../../modals/types';
import { IconAdd } from '../../../../icons/Icons';
import theme from '../../../../styles/theme';

const StyledSection = styled.div`
  margin: 32px 0;

  h1.title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
  }
`;

const EmptyTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.neutral100};
  border-radius: 4px;
  height: 96px;
  margin-bottom: 8px;
  background-color: white;
  font-size: 16px;
  color: ${props => props.theme.neutral300};
  font-style: italic;
`;
EmptyTasks.displayName = 'EmptyTasks';

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
`;
Tasks.displayName = 'Tasks';

class Section extends Component {
  openModal = () => {
    const { dayId, sectionId } = this.props;
    this.props.storeCreateTaskData(dayId, sectionId);
    this.props.openModal(ADD_TASK);
  };

  render() {
    const { section, tasks } = this.props;
    return (
      <StyledSection>
        <h1 className="title">{section.title}</h1>
        {section.tasks.length ? (
          <Tasks>
            {section.tasks.map(id => (
              <Task key={id}>{tasks[id].title}</Task>
            ))}
          </Tasks>
        ) : (
          <EmptyTasks>
            No tasks in section "<span>{section.title}</span>"
          </EmptyTasks>
        )}
        <Link intent="secondary" onClick={this.openModal}>
          <IconAdd primaryColor={theme.neutral500} /> Add task
        </Link>
      </StyledSection>
    );
  }
}

export default Section;
