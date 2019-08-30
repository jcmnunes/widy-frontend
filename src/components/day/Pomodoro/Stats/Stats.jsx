import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { getNumberOfPomodoros, getTotalTime } from '../../../../helpers/pomodoro';
import { IconTime } from '../../../../icons/Icons';
import { Empty, Multiplier, Pomodoros, StyledStats, Td, Units, Value } from './Stats.styles';

const Stats = ({ time }) => {
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
          <IconTime key={uuidv4()} size={18} />
        </Pomodoros>
      );
    }
    return (
      <Pomodoros>
        {Array(numPomodoros)
          .fill('')
          .map(() => (
            <IconTime key={uuidv4()} size={18} />
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
};

export default Stats;
