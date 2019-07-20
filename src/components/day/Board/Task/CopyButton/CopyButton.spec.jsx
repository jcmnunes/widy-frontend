import React from 'react';
import { shallow } from 'enzyme';
import CopyButton from './CopyButton';
import fixture from './CopyButton.fixture';
import { findByTestAttr } from '../../../../../helpers/testUtils';

jest.mock('../../../../../helpers/toast', () => () => ({
  success: jest.fn(),
}));

const defaultProps = { ...fixture };

/**
 * Factory function to create a ShallowWrapper for the ActiveTaskPopupComponent component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CopyButton {...setupProps} />).dive();
};

describe('CopyButton', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should render with no errors', () => {
    const component = findByTestAttr(wrapper, 'copy-button');
    expect(component.length).toBe(1);
  });
});
