import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;

  .dropdown {
    position: absolute;
    right: ${props => (props.position === 'right' ? 0 : 'auto')};
    left: ${props => (props.position === 'left' ? 0 : 'auto')};
    top: ${props => props.triggerHeight + 4}px;
    box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
    background: white;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.neutral100};
    z-index: 100;
  }
`;

export const StyledDropdown = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { triggerHeight: 0, isOpen: false };
    this.trigger = React.createRef();
    this.dropdown = React.createRef();
  }

  componentDidMount() {
    const triggerHeight = this.trigger.current.clientHeight;
    this.setState({ triggerHeight });
    document.addEventListener('mousedown', this.handleDocumentClick, false);
    document.addEventListener('keydown', this.handleDocumentKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick, false);
    document.removeEventListener('keydown', this.handleDocumentKeydown, false);
  }

  handleDocumentClick = e => {
    const { closeOnAction } = this.props;
    if (this.dropdown.current.contains(e.target) && !closeOnAction) {
      return;
    }

    this.handleOutsideClick();
  };

  handleDocumentKeydown = e => {
    this.handleOutsideClick();
  };

  handleOutsideClick = () => {
    this.setState({ isOpen: false });
  };

  handleTriggerClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { trigger, position, children } = this.props;
    const { triggerHeight, isOpen } = this.state;
    const Trigger = React.cloneElement(trigger, {
      onClick: this.handleTriggerClick,
    });
    return (
      <StyledContainer ref={this.dropdown} triggerHeight={triggerHeight} position={position}>
        <div ref={this.trigger}>{Trigger}</div>
        {isOpen && <div className="dropdown">{children}</div>}
      </StyledContainer>
    );
  }
}

Dropdown.defaultProps = {
  closeOnAction: false,
  position: 'left',
};

Dropdown.propTypes = {
  trigger: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  closeOnAction: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
};

export default Dropdown;
