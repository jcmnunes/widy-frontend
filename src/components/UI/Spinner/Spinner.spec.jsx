import React from 'react';
import Spinner from '.';

const TestRenderer = require('react-test-renderer');

describe('UI Components', () => {
  describe('RoundButton', () => {
    const props = {};

    it('should render as expected, without crashing', () => {
      const tree = TestRenderer.create(<Spinner {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should apply the correct styles for a large spinner', () => {
      const newProps = {
        ...props,
        size: 'large',
      };
      const tree = TestRenderer.create(<Spinner {...newProps} />).toJSON();
      expect(tree).toHaveStyleRule('width', '24px');
      expect(tree).toHaveStyleRule('height', '24px');
    });

    it('should apply the correct styles for a non neutral (or secondary) spinner', () => {
      const newProps = {
        ...props,
        intent: 'primary',
      };
      const tree = TestRenderer.create(<Spinner {...newProps} />).toJSON();
      expect(tree).toHaveStyleRule('border', '3px solid #FFFFFF32');
      expect(tree).toHaveStyleRule('border-top-color', '#FFF');
    });
  });
});
