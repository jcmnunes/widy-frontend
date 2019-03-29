import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import Days from './Days';
import Button from '../../UI/Button';
import { IconAdd } from '../../../icons/Icons';
import { IconWidy, IconWidyText } from '../../../icons/widy';
import { storeSelectedDay, getDays, getDay, createDay } from '../../../actions/days';
import theme from '../../../styles/theme';

const StyledNavigation = styled.div`
  background: ${props => props.theme.neutral100};
  padding: 36px 24px 24px;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h2 {
      font-weight: bold;
      font-size: 16px;
      color: ${props => props.theme.neutral800};
      text-transform: uppercase;
    }
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
    this.props.storeSelectedDay(id);
    this.props.getDay(id);
  };

  render() {
    const { loading, days, daysOrder, selected, createDayLoading } = this.props;
    const today = moment().format('YYYY-MM-DD');
    const isTodayCreated = !!daysOrder.find(id => days[id].day === today);
    return (
      <StyledNavigation>
        <Brand>
          <IconWidy size={30} yesterdayColor={theme.blue700} />
          <IconWidyText size={60} textColor={theme.blue700} />
        </Brand>
        <div className="header">
          <h2>Days</h2>
          <Button
            loading={createDayLoading}
            disabled={isTodayCreated}
            onClick={this.props.createDay}
            intent="primary"
            iconBefore={<IconAdd primaryColor="#fff" />}
          >
            Add Day
          </Button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Days days={days} order={daysOrder} selected={selected} onClick={this.handleDayClick} />
        )}
      </StyledNavigation>
    );
  }
}

Navigation.propTypes = {
  loading: PropTypes.bool.isRequired,
  days: PropTypes.object.isRequired,
  daysOrder: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  createDayLoading: PropTypes.bool.isRequired,
  getDays: PropTypes.func.isRequired,
  storeSelectedDay: PropTypes.func.isRequired,
  createDay: PropTypes.func.isRequired,
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
  { getDays, getDay, storeSelectedDay, createDay },
)(Navigation);
