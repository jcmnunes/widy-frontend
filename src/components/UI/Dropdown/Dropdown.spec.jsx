/* eslint-disable react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Dropdown, StyledDropdown } from '..';

const TestRenderer = require('react-test-renderer');

describe('UI Components', () => {
  describe('RoundButton', () => {
    const props = {
      trigger: <div id="trigger">trigger</div>,
    };

    const createNodeMock = () => {
      return {};
    };

    it('should render as expected, without crashing (2)', () => {
      const tree = TestRenderer.create(
        <Dropdown {...props}>
          <StyledDropdown>
            <span>item</span>
          </StyledDropdown>
        </Dropdown>,
        { createNodeMock },
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should align the dropdown to the right when position prop is set to "right"', () => {
      const newProps = {
        ...props,
        position: 'right',
      };
      const tree = TestRenderer.create(
        <Dropdown {...newProps}>
          <StyledDropdown>
            <span>item</span>
          </StyledDropdown>
        </Dropdown>,
        { createNodeMock },
      ).toJSON();
      expect(tree).toHaveStyleRule('right', '0', { modifier: ' .dropdown' });
      expect(tree).toHaveStyleRule('left', 'auto', { modifier: ' .dropdown' });
    });

    it('should open the dropdown when clicking the trigger', () => {
      const wrapper = mount(
        <Dropdown {...props}>
          <StyledDropdown>
            <span>item</span>
          </StyledDropdown>
        </Dropdown>,
      );
      expect(wrapper.find('.dropdown')).toHaveLength(0);
      const trigger = wrapper.find('#trigger');
      trigger.simulate('click');
      expect(wrapper.find('.dropdown')).toHaveLength(1);
    });

    it('should close the dropdown when clicking outside', () => {
      const map = {};
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      const wrapper = mount(
        <Dropdown {...props}>
          <StyledDropdown>
            <span>item</span>
          </StyledDropdown>
        </Dropdown>,
      );
      const trigger = wrapper.find('#trigger');
      trigger.simulate('click');
      expect(wrapper.find('.dropdown')).toHaveLength(1);
      // Simulate a document click
      map.mousedown({
        target: document,
      });
      wrapper.update();
      expect(wrapper.find('.dropdown')).toHaveLength(0);
    });

    it('should close the dropdown when clicking outside (2)', () => {
      const wrapper = mount(
        <Dropdown {...props}>
          <StyledDropdown>
            <span>item</span>
          </StyledDropdown>
        </Dropdown>,
      );
      wrapper.instance().handleDocumentClick({
        target: document,
      });
      expect(wrapper.find('.dropdown')).toHaveLength(0);
    });

    it('should not close the dropdown when clicking inside', () => {
      const map = {};
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      const wrapper = mount(
        <Dropdown {...props}>
          <StyledDropdown>
            <span>item</span>
          </StyledDropdown>
        </Dropdown>,
      );
      const trigger = wrapper.find('#trigger');
      trigger.simulate('click');
      expect(wrapper.find('.dropdown')).toHaveLength(1);
      // Simulate a document click where the target is the Dropdown itself
      map.mousedown({
        target: ReactDOM.findDOMNode(wrapper.instance()),
      });
      wrapper.update();
      expect(wrapper.find('.dropdown')).toHaveLength(1);
    });

    it('should close the dropdown when clicking inside if closeOnAction prop is true', () => {
      const map = {};
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });

      const newProps = {
        ...props,
        closeOnAction: true,
      };

      const wrapper = mount(
        <Dropdown {...newProps}>
          <StyledDropdown>
            <span>item</span>
          </StyledDropdown>
        </Dropdown>,
      );
      const trigger = wrapper.find('#trigger');
      trigger.simulate('click');
      expect(wrapper.find('.dropdown')).toHaveLength(1);
      // Simulate a document click where the target is the Dropdown itself
      map.mousedown({
        target: ReactDOM.findDOMNode(wrapper.instance()),
      });
      wrapper.update();
      expect(wrapper.find('.dropdown')).toHaveLength(0);
    });
  });
});
