import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledModal, Button } from '../index';
import { IconClose } from '../../../icons/Icons';
import { closeModal } from '../../../actions/modals';
import theme from '../../../styles/theme';

class ModalBase extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  handleCloseModalClick = () => {
    this.props.closeModal();
  };

  handleCloseModalKeydown = e => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      this.props.closeModal();
    }
  };

  render() {
    const { loading, actionText, handleSubmit, children } = this.props;
    return (
      <StyledModal>
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <div className="header">
              <span
                className="close"
                role="button"
                tabIndex="0"
                onClick={this.handleCloseModalClick}
                onKeyDown={this.handleCloseModalKeydown}
              >
                <IconClose size={36} primaryColor={theme.neutral500} />
              </span>
            </div>
            <div className="body">{children}</div>
            <div className="footer">
              <Button type="button" intent="secondary" size="large" onClick={this.props.closeModal}>
                Cancel
              </Button>
              <Button type="submit" isLoading={loading} intent="primary" size="large">
                {actionText}
              </Button>
            </div>
          </form>
        </div>
      </StyledModal>
    );
  }
}

ModalBase.defaultProps = {
  loading: false,
};

ModalBase.propTypes = {
  closeModal: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  actionText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default connect(
  null,
  { closeModal },
)(ModalBase);
