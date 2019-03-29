import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Task from '../Task/Task';
import { openModal } from '../../../../actions/modals';
import { storeCreateTaskData } from '../../../../actions/tasks';
import Link from '../../../UI/Link';
import { ADD_TASK } from '../../../modals/types';
import { IconAdd } from '../../../../icons/Icons';
import theme from '../../../../styles/theme';
import randomPattern from '../../../../helpers/randomPattern';

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

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
`;

class Section extends Component {
  openModal = () => {
    const { dayId, sectionId } = this.props;
    this.props.storeCreateTaskData(dayId, sectionId);
    this.props.openModal(ADD_TASK);
  };

  render() {
    const { title, section, tasks } = this.props;
    return (
      <StyledSection>
        <h1 className="title">{title}</h1>
        {section.tasks.length ? (
          <Tasks>
            {section.tasks.map(id => (
              <Task key={id}>{tasks[id].title}</Task>
            ))}
          </Tasks>
        ) : (
          <EmptyTasks>
            No tasks in section "<span>{title}</span>"
          </EmptyTasks>
        )}
        <Link intent="secondary" loading={false} disabled={false} onClick={this.openModal}>
          <IconAdd primaryColor={theme.neutral500} /> Add task
        </Link>
      </StyledSection>
    );
  }
}

const mapStateToProps = (state, props) => ({
  section: state.sections.byId[props.sectionId],
  tasks: state.tasks.byId,
});

export default connect(
  mapStateToProps,
  { openModal, storeCreateTaskData },
)(Section);
