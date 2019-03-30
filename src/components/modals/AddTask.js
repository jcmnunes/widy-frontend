import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledModal } from '../UI';
import { IconClose } from '../../icons/Icons';
import { Button, InputField } from '../UI';
import { closeModal } from '../../actions/modals';
import { startCreateTaskRequest } from '../../actions/tasks';
import theme from '../../styles/theme';

class AddTask extends Component {
  state = { title: '' };

  closeModal = () => {
    this.props.closeModal();
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.startCreateTaskRequest(this.state.title);
  };

  render() {
    const { loading } = this.props;
    return (
      <StyledModal>
        <div className="modal">
          <form onSubmit={this.handleSubmit}>
            <div className="header">
              <span className="close" tabIndex="0" onClick={this.closeModal}>
                <IconClose size={36} primaryColor={theme.neutral500} />
              </span>
            </div>
            <div className="body">
              <h1 className="title">What will you be working on?</h1>
              <InputField
                autoFocus
                type="text"
                name="title"
                placeholder="Task name"
                value={this.state.value}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="footer">
              <Button intent="secondary" size="large" onClick={this.closeModal}>
                Cancel
              </Button>
              <Button type="submit" loading={loading} intent="primary" size="large">
                Add task
              </Button>
            </div>
          </form>
        </div>
      </StyledModal>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.tasks.createTask.loading,
});

export default connect(
  mapStateToProps,
  { closeModal, startCreateTaskRequest },
)(AddTask);
