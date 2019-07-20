import React from 'react';
import { shallow } from 'enzyme';

import ActionsTopComponent from './ActionsTop.component';
import fixture from './ActionsTop.fixture';

describe('Day Components', () => {
  describe('ActionsTopComponent', () => {
    const props = {
      ...fixture,
      logout: jest.fn(),
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<ActionsTopComponent {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
