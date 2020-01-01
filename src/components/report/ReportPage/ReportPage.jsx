import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import TaskPerSectionChart from './TaskPerSectionChart/TaskPerSectionChart';
import { getReport } from '../Report.actions';
import { reportSelector, timePerSectionPieChartDataSelector } from '../Report.selectors';
import {
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

const ReportPage = ({ dayId }) => {
  const dispatch = useDispatch();

  const { totalTime, completedTasks, totalTasks, day } = useSelector(reportSelector);
  const timePerSectionPieChartData = useSelector(timePerSectionPieChartDataSelector);

  useEffect(() => {
    dispatch(getReport(dayId));
  }, [dayId, dispatch]);

  return (
    <StyledReportPage>
      <ReportTitle>Report</ReportTitle>
      <ReportDescription>{formatDay(day)}</ReportDescription>
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
    </StyledReportPage>
  );
};

ReportPage.propTypes = {
  dayId: PropTypes.string.isRequired,
};

export default ReportPage;
