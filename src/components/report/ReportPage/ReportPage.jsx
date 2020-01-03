import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton, Spinner } from '@binarycapsule/ui-capsules';
import styled from 'styled-components/macro';
import TaskPerSectionChart from './TaskPerSectionChart/TaskPerSectionChart';
import { getReport } from '../Report.actions';
import {
  reportLoadingSelector,
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

const LoadingReport = styled.div`
  flex-direction: column;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.neutral400};
  margin-bottom: 12px;
`;

const ReportPage = ({ dayId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const reportLoading = useSelector(reportLoadingSelector);
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
          <ReportDescription>{reportLoading ? '' : formatDay(day)}</ReportDescription>
        </div>
        <ActionsContainer>
          <IconButton icon="LOGOUT" isRound onClick={() => history.push('/')} text="Exit Report" />
          <UserDropdown />
        </ActionsContainer>
      </ActionsTop>
      {reportLoading ? (
        <LoadingReport>
          <SpinnerText>Getting report...</SpinnerText>
          <Spinner appearance="secondary" size="large" />
        </LoadingReport>
      ) : (
        <>
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
        </>
      )}
    </StyledReportPage>
  );
};

ReportPage.propTypes = {
  dayId: PropTypes.string.isRequired,
};

export default ReportPage;
