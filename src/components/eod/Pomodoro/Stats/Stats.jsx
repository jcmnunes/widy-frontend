import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import uuidv4 from 'uuid/v4';
import { getNumberOfPomodoros, getTotalTime } from '../../../../helpers/pomodoro';
import { IconTime } from '../../../../icons/Icons';

const StyledStats = styled.table`
  margin-top: 16px;
`;

const Td = styled.td`
  padding: 8px;
  vertical-align: middle;
`;

const Value = styled.span`
  font-size: 22px;
  margin-right: 4px;
`;

const Units = styled.span`
  font-size: 14px;
  margin-right: 8px;
`;

const Pomodoros = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    margin-right: 4px;
  }
`;

const Empty = styled.span`
  font-style: italic;
  color: ${props => props.theme.neutral300};
`;

const Multiplier = styled.span`
  font-size: 14px;
`;

const Stats = ({ time, theme }) => {
  const renderTime = () => {
    const timeMinutesHours = getTotalTime(time);
    return (
      <>
        {timeMinutesHours.hours > 0 && (
          <>
            <Value>{timeMinutesHours.hours}</Value>
            <Units>h</Units>
          </>
        )}
        <Value>{timeMinutesHours.minutes}</Value>
        <Units>min</Units>
      </>
    );
  };

  const renderPomodoros = () => {
    const numPomodoros = getNumberOfPomodoros(time);
    if (numPomodoros === 0) return <Empty>---</Empty>;
    if (numPomodoros > 5) {
      return (
        <Pomodoros>
          <Multiplier>{numPomodoros} x</Multiplier>
          <IconTime
            key={uuidv4()}
            size={18}
            primaryColor={theme.neutral200}
            secondaryColor={theme.neutral500}
          />
        </Pomodoros>
      );
    }
    return (
      <Pomodoros>
        {Array(numPomodoros)
          .fill('')
          .map(() => (
            <IconTime
              key={uuidv4()}
              size={18}
              primaryColor={theme.neutral200}
              secondaryColor={theme.neutral500}
            />
          ))}
      </Pomodoros>
    );
  };

  return (
    <StyledStats>
      <tbody>
        <tr>
          <Td>Total time worked on task:</Td>
          <Td>{renderTime()}</Td>
        </tr>
        <tr>
          <Td>Total number of pomodoros:</Td>
          <Td>{renderPomodoros()}</Td>
        </tr>
      </tbody>
    </StyledStats>
  );
};

Stats.propTypes = {
  time: PropTypes.number.isRequired,
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
};

export default withTheme(Stats);
