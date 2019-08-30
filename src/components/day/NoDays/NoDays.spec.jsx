import React from 'react';
import { shallow } from 'enzyme';

import NoDays from '.';
import { findByTestAttr } from '../../../helpers/testUtils';

const TestRenderer = require('react-test-renderer');

const setup = () => {
  return shallow(<NoDays />);
};

describe('NoDays', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should render as expected, without crashing', () => {
    const tree = TestRenderer.create(<NoDays />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with no errors', () => {
    const component = findByTestAttr(wrapper, 'NoDays');
    expect(component.length).toBe(1);
  });
});
