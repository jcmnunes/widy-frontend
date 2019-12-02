import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PomodoroLoading from './Pomodoro.loading';
import { resetState } from './Pomodoro.actions';
import { isFetchingPomodoroSettingsSelector, pomodoroSettingsSelector } from './Pomodoro.selector';
import { PageDescription, PageTitle } from '../Page.styles';
import PomodoroForm from './Pomodoro.form';

const Pomodoro = () => {
  const dispatch = useDispatch();
  const isFetchingPomodoroSettings = useSelector(isFetchingPomodoroSettingsSelector);
  const pomodoroSettings = useSelector(pomodoroSettingsSelector);

  useEffect(() => () => dispatch(resetState()), [dispatch]);

  return (
    <div>
      <PageTitle>Pomodoro</PageTitle>
      <PageDescription>Change your pomodoro settings</PageDescription>
      <div>
        {isFetchingPomodoroSettings ? (
          <PomodoroLoading />
        ) : (
          <PomodoroForm pomodoroSettings={pomodoroSettings} />
        )}
      </div>
    </div>
  );
};

export default Pomodoro;
