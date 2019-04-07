import React from 'react';
import { shallow } from 'enzyme';
import RoundButton from './RoundButton';
import { IconUserCircle, IconCheveronDown } from '../../../icons/Icons';

const TestRenderer = require('react-test-renderer');

describe('UI Components', () => {
  describe('RoundButton', () => {
    const props = {};

    it('should render as expected, without crashing (2)', () => {
      const tree = TestRenderer.create(<RoundButton {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should set the opacity to 0.5 when the button is disabled but not in a loading state', () => {
      const newProps = {
        ...props,
        loading: false,
        disabled: true,
      };
      const tree = TestRenderer.create(<RoundButton {...newProps} />).toJSON();
      expect(tree).toHaveStyleRule('opacity', '0.5');
    });

    it('should make content invisible when in a loading state', () => {
      const newProps = {
        ...props,
        loading: true,
      };
      const tree = TestRenderer.create(<RoundButton {...newProps} />).toJSON();
      expect(tree).toHaveStyleRule('visibility', 'hidden', { modifier: ' .content' });
    });

    it('should render nodes passed as children', () => {
      const children = 'Children text';
      const wrapper = shallow(<RoundButton {...props}>{children}</RoundButton>);
      expect(wrapper.find('.children')).toHaveLength(1);
      expect(wrapper.find('.children').text()).toBe('Children text');
    });

    it('should render the iconAfter and the iconBefore', () => {
      const children = 'Children text';
      const newProps = {
        ...props,
        iconBefore: <IconUserCircle />,
        iconAfter: <IconCheveronDown />,
      };
      const wrapper = shallow(<RoundButton {...newProps}>{children}</RoundButton>);
      expect(wrapper.find(IconUserCircle)).toHaveLength(1);
      expect(wrapper.find(IconCheveronDown)).toHaveLength(1);
    });

    it('should render a loading indicator if props.loading is true', () => {
      const newProps = {
        ...props,
        loading: true,
      };
      const wrapper = shallow(<RoundButton {...newProps} />);
      expect(wrapper.find('.spinner')).toHaveLength(1);
    });
  });
});
