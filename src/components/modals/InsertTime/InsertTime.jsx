import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ModalBase, Input } from '../../UI';
import constants from './InsertTime.constants';

const { suggestions } = constants();

const Label = styled.label`
  font-size: 20px;
  margin: 0 16px 0 8px;
  color: ${props => props.theme.neutral500};
`;

const TimeSuggestions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 18px 200px 0 0;
`;

const Suggestion = styled.span`
  background-color: ${props => (props.isSelected ? props.theme.blue100 : 'white')};
  border: 1px solid ${props => props.theme.blue400};
  border-radius: 1000px;
  font-size: 12px;
  color: ${props => props.theme.neutral700};
  padding: 4px 8px;
  min-width: 50px;
  text-align: center;
  margin: 0 8px 8px 0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => (props.isSelected ? props.theme.blue100 : props.theme.blue050)};
  }

  & > * {
    margin: 0 0.3em;
  }
`;

const InsertTime = ({ selectedTaskId, updateTask, closeModal }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleHoursChange = e => {
    const { value } = e.target;
    setHours(value);
  };

  const handleMinutesChange = e => {
    const { value } = e.target;
    setMinutes(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const time = hours * 3600 + minutes * 60;
    updateTask(selectedTaskId, { time });
    closeModal();
  };

  const handleSuggestionClick = e => {
    const { h, min } = e.currentTarget.dataset;
    setHours(h);
    setMinutes(min);
  };

  return (
    <ModalBase actionText="Insert time" handleSubmit={handleSubmit}>
      <h1 className="title">Insert new task time:</h1>
      <div>
        <Input type="number" value={hours} min={0} max={24} step={1} onChange={handleHoursChange} />
        <Label>h</Label>
        <Input
          type="number"
          value={minutes}
          min={0}
          max={59}
          step={5}
          onChange={handleMinutesChange}
        />
        <Label>min</Label>
      </div>
      <TimeSuggestions>
        {suggestions.map(({ key, value }) => (
          <Suggestion
            key={key}
            isSelected={String(hours) === String(value.h) && String(minutes) === String(value.min)}
            onClick={handleSuggestionClick}
            data-h={value.h}
            data-min={value.min}
          >
            {value.h > 0 && <span>{value.h} h</span>}
            {value.min > 0 && <span>{value.min} min</span>}
          </Suggestion>
        ))}
      </TimeSuggestions>
    </ModalBase>
  );
};

InsertTime.propTypes = {
  selectedTaskId: PropTypes.string.isRequired,
  updateTask: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default InsertTime;
