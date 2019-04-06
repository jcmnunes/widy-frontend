import React from 'react';
import { shallow } from 'enzyme';

import ActionsTop from './ActionsTop';
import fixture from './ActionsTop.fixture';

describe('EOD Components', () => {
  describe('ActionsTop', () => {
    const props = {
      ...fixture,
      logout: jest.fn(),
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<ActionsTop {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
