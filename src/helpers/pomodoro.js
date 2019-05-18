import settings from './settings';

/**
 * Returns the total number of Pomodoros
 *
 * @param {number} time - Elapsed time in seconds
 * @returns {number} - Number of Pomodoros
 */
export const getNumberOfPomodoros = time => {
  const timeInMinutes = time / 60;
  const { length, shortBreak } = settings().pomodoro;
  if (timeInMinutes < length) return 0;

  let pomodoros = Math.floor(timeInMinutes / (length + shortBreak));
  if (timeInMinutes % (length + shortBreak) >= length) pomodoros += 1;
  return pomodoros;
};

/**
 * Returns information about current active task time
 *
 * @param {number} time - Elapsed time (secs)
 * @returns {{ inBreak: boolean, elapsedTime: string }}
 */
export const getCurrentPomodoroInfo = time => {
  const timeInMinutes = time / 60;
  const { length, shortBreak } = settings().pomodoro;
  const remainingTime = timeInMinutes % (length + shortBreak);

  const info = { inBreak: false, elapsedTime: formatTime(remainingTime) };

  if (remainingTime >= length) {
    info.inBreak = true;
    info.elapsedTime = formatTime(remainingTime - length);
  }

  return info;
};

/**
 * Formats total time
 *
 * @example
 *   getTotalTime(4 * 60) ➜ { hours: 0, minutes: 4 }
 *   getTotalTime(64 * 60) ➜ { hours: 1, minutes: 4 }
 *
 * @param {number} time - Time in secs
 * @returns {{ hours: number, minutes: number }} - Object containing two integers representing
 * time in hours and minutes
 */
export const getTotalTime = time => {
  const hours = time / 60 / 60;

  return {
    hours: Math.floor(hours),
    minutes: Math.floor((hours - Math.floor(hours)) * 60),
  };
};

/**
 * Converts time in secs to a formatted string (00 : 00)
 *
 * @param {number} time - Time to format (secs)
 * @returns {string} - Formatted time ➜ 00 : 00
 */
export const formatTime = time => {
  const mins = Math.floor(time);
  const secs = Math.round((time - Math.floor(time)) * 60);

  return `${mins} : ${String(secs).padStart(2, '0')}`;
};
