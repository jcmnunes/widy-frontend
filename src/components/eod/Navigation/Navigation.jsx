import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import Days from './Days';
import LoadingNavigation from './LoadingNavigation';
import Button from '../../UI/Button';
import { Heading1 } from '../../UI/Typography';
import { IconAdd } from '../../../icons/Icons';
import { IconWidy, IconWidyText } from '../../../icons/widy';
import { storeSelectedDay, getDays, getDay, createDay } from '../../../actions/days';
import { storeSelectedTaskId } from '../../../actions/tasks';
import { closeSidebar } from '../../../actions/sidebar';
import theme from '../../../styles/theme';

const StyledNavigation = styled.div`
  background: ${props => props.theme.neutral050};
  padding: 36px 24px 24px;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
`;

const Brand = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: flex-end;

  svg:last-child {
    margin-left: 8px;
  }
`;

class Navigation extends Component {
  componentDidMount() {
    this.props.getDays();
  }

  handleDayClick = id => {
    const { selected } = this.props;
    if (id === selected) return;
    this.props.storeSelectedDay(id);
    this.props.getDay(id);
  };

  createDay = () => {
    this.props.storeSelectedTaskId('');
    this.props.closeSidebar();
    this.props.createDay();
  };

  render() {
    const { loading, days, daysOrder, selected, createDayLoading } = this.props;
    const today = moment().format('YYYY-MM-DD');
    const isTodayCreated = !!daysOrder.find(id => days[id].day === today);
    return (
      <StyledNavigation>
        <Brand>
          <IconWidy size={30} yesterdayColor={theme.blue600} />
          <IconWidyText size={60} textColor={theme.blue600} />
        </Brand>
        <div className="header">
          <Heading1>Days</Heading1>
          <Button
            loading={createDayLoading}
            disabled={isTodayCreated || loading}
            onClick={this.createDay}
            intent="primary"
            iconBefore={<IconAdd primaryColor="#fff" />}
          >
            Add Day
          </Button>
        </div>
        {loading ? (
          <LoadingNavigation />
        ) : (
          <Days days={days} order={daysOrder} selected={selected} onClick={this.handleDayClick} />
        )}
      </StyledNavigation>
    );
  }
}

Navigation.propTypes = {
  loading: PropTypes.bool.isRequired,
  days: PropTypes.shape({
    [PropTypes.string]: PropTypes.object,
  }).isRequired,
  daysOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  createDayLoading: PropTypes.bool.isRequired,
  getDay: PropTypes.func.isRequired,
  getDays: PropTypes.func.isRequired,
  storeSelectedDay: PropTypes.func.isRequired,
  storeSelectedTaskId: PropTypes.func.isRequired,
  createDay: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  loading: state.days.loading,
  days: state.days.byId,
  daysOrder: state.days.order,
  selected: state.days.selected,
  createDayLoading: state.days.createDayLoading,
});

export default connect(
  mapStateToProps,
  { getDays, getDay, storeSelectedDay, createDay, storeSelectedTaskId, closeSidebar },
)(Navigation);
