import React from 'react';
import { shallow } from 'enzyme';

import SectionComponent from './Section.component';
import fixture from './Section.fixture';
import { ADD_TASK } from '../../../modals/types';
import { findByTestAttr } from '../../../../helpers/testUtils';

const TestRenderer = require('react-test-renderer');

jest.mock('../Task', () => () => <div data-test="Task">Task__mock</div>);
jest.mock('../PlanTask', () => () => <div data-test="PlanTask">PlanTask__mock</div>);
jest.mock('react-beautiful-dnd', () => ({
  Droppable: () => <div data-test="Droppable">Droppable</div>,
}));

const defaultProps = {
  ...fixture,
  openModal: jest.fn(),
  storeCreateTaskData: jest.fn(),
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SectionComponent {...setupProps} />);
};

describe('SectionComponent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should render as expected, without crashing', () => {
    const tree = TestRenderer.create(<SectionComponent {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should open a model when clicking the add task button', () => {
    const addTaskButton = findByTestAttr(wrapper, 'add-task-button');
    addTaskButton.simulate('click');
    expect(defaultProps.openModal).toHaveBeenCalledWith(ADD_TASK);
  });

  // xit('should store the dayId and sectionId when adding a new task', () => {
  //   const wrapper = shallow(<SectionComponent {...props} />);
  //   wrapper.find('Link').simulate('click');
  //   expect(props.storeCreateTaskData).toHaveBeenCalledWith(fixture.dayId, fixture.sectionId);
  // });
  //
  // xit('should render an "EmptyTasks" component when there are no tasks to render', () => {
  //   const wrapper = shallow(<SectionComponent {...props} />);
  //   expect(wrapper.find('EmptyTasks')).toHaveLength(1);
  // });
  //
  // xit('should render a list of tasks when there are tasks to render', () => {
  //   const newProps = {
  //     ...props,
  //     section: {
  //       ...props.section,
  //       tasks: ['5c9ee9369460ec33384b67df', '5c9ee9369460ec33384b67hf'],
  //     },
  //     tasks: {
  //       '5c9ee9369460ec33384b67df': {
  //         title: 'Task 1',
  //       },
  //       '5c9ee9369460ec33384b67hf': {
  //         title: 'Task 2 ',
  //       },
  //     },
  //   };
  //   const wrapper = shallow(<SectionComponent {...newProps} />);
  //   expect(wrapper.find('Tasks')).toHaveLength(1);
  //   // expect(wrapper.find(Task)).toHaveLength(2);
  //   expect(wrapper.find('EmptyTasks')).toHaveLength(0);
  // });
});
