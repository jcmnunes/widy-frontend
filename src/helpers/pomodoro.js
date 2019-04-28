import settings from './settings';

/**
 * Returns the total number of Pomodoros
 *
 * @param {number} time - Elapsed time in seconds
 * @returns {number} - Number of Pomodoros
 */
export const getNumberOfPomodoros = time => {
  const timeInMinutes = time / 60;
  const { length, shortBreak } = settings.pomodoro;
  if (timeInMinutes < length) return 0;

  let pomodoros = Math.floor(timeInMinutes / (length + shortBreak));
  if (timeInMinutes % (length + shortBreak) >= length) pomodoros += 1;
  return pomodoros;
};

/**
 *
 * @param {number} time - Elapsed time (secs)
 * @returns {{ inBreak: boolean, elapsedTime: string }}
 */
export const getCurrentPomodoroInfo = time => {
  const timeInMinutes = time / 60;
  const { length, shortBreak } = settings.pomodoro;
  const remainingTime = timeInMinutes % (length + shortBreak);

  const info = { inBreak: false, elapsedTime: formatTime(remainingTime) };

  if (remainingTime >= length) {
    info.inBreak = true;
    info.elapsedTime = formatTime(remainingTime - length);
  }

  return info;
};

export const getTotalTime = time => {
  const hours = Math.floor(time / 60 / 60);

  return {
    hours,
    minutes: hours > 0 ? hours % 60 : Math.floor(time / 60),
  };
};

export const formatTime = time => {
  const mins = Math.floor(time);
  const secs = Math.round((time - Math.floor(time)) * 60);

  return `${mins} : ${String(secs).padStart(2, '0')}`;
};
