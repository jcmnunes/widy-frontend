import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@binarycapsule/ui-capsules';
import TaskPerSectionChart from './TaskPerSectionChart/TaskPerSectionChart';
import { getReport } from '../Report.actions';
import {
  reportSelector,
  tasksTableDataSelector,
  timePerSectionPieChartDataSelector,
} from '../Report.selectors';
import {
  ActionsContainer,
  ActionsTop,
  ChartsContainer,
  ReportDescription,
  ReportTitle,
  Stat,
  StatLabel,
  StatsContainer,
  StatValue,
  StyledReportPage,
} from './ReportPage.styles';
import { formatTotalTime } from '../../../helpers/pomodoro';
import { formatDay } from '../../../helpers/dates';
import TasksTable from './TasksTable/TasksTable';
import UserDropdown from '../../common/UserDropdown/UserDropdown';

const ReportPage = ({ dayId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { totalTime, completedTasks, totalTasks, day } = useSelector(reportSelector);
  const timePerSectionPieChartData = useSelector(timePerSectionPieChartDataSelector);
  const tasksTableData = useSelector(tasksTableDataSelector);

  useEffect(() => {
    dispatch(getReport(dayId));
  }, [dayId, dispatch]);

  return (
    <StyledReportPage>
      <ActionsTop>
        <div>
          <ReportTitle>Report</ReportTitle>
          <ReportDescription>{formatDay(day)}</ReportDescription>
        </div>
        <ActionsContainer>
          <IconButton icon="LOGOUT" isRound onClick={() => history.push('/')} text="Exit Report" />
          <UserDropdown />
        </ActionsContainer>
      </ActionsTop>
      <StatsContainer>
        <Stat>
          <StatValue>{formatTotalTime(totalTime)}</StatValue>
          <StatLabel>Total time worked</StatLabel>
        </Stat>
        <Stat>
          <StatValue>{`${completedTasks} / ${totalTasks}`}</StatValue>
          <StatLabel>Tasks completed/total</StatLabel>
        </Stat>
      </StatsContainer>
      <ChartsContainer>
        <TaskPerSectionChart data={timePerSectionPieChartData} />
      </ChartsContainer>
      <TasksTable data={tasksTableData} />
    </StyledReportPage>
  );
};

ReportPage.propTypes = {
  dayId: PropTypes.string.isRequired,
};

export default ReportPage;
