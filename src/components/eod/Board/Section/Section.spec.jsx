import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Section from './Section';
import Task from '../Task';
import fixture from './Section.fixture';
import { ADD_TASK } from '../../../modals/types';

const TestRenderer = require('react-test-renderer');

describe('EOD Components', () => {
  describe('Section', () => {
    const props = {
      ...fixture,
      openModal: jest.fn(),
      storeCreateTaskData: jest.fn(),
    };

    xit('should render as expected, without crashing', () => {
      const tree = TestRenderer.create(<Section {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    xit('should open a model when clicking the add task button', () => {
      const wrapper = shallow(<Section {...props} />);
      wrapper.find('Link').simulate('click');
      expect(props.openModal).toHaveBeenCalledWith(ADD_TASK);
    });

    xit('should store the dayId and sectionId when adding a new task', () => {
      const wrapper = shallow(<Section {...props} />);
      wrapper.find('Link').simulate('click');
      expect(props.storeCreateTaskData).toHaveBeenCalledWith(fixture.dayId, fixture.sectionId);
    });

    xit('should render an "EmptyTasks" component when there are no tasks to render', () => {
      const wrapper = shallow(<Section {...props} />);
      expect(wrapper.find('EmptyTasks')).toHaveLength(1);
    });

    xit('should render a list of tasks when there are tasks to render', () => {
      const newProps = {
        ...props,
        section: {
          ...props.section,
          tasks: ['5c9ee9369460ec33384b67df', '5c9ee9369460ec33384b67hf'],
        },
        tasks: {
          '5c9ee9369460ec33384b67df': {
            title: 'Task 1',
          },
          '5c9ee9369460ec33384b67hf': {
            title: 'Task 2 ',
          },
        },
      };
      const wrapper = shallow(<Section {...newProps} />);
      expect(wrapper.find('Tasks')).toHaveLength(1);
      expect(wrapper.find(Task)).toHaveLength(2);
      expect(wrapper.find('EmptyTasks')).toHaveLength(0);
    });
  });
});
