import { getNumberOfPomodoros, getCurrentPomodoroInfo } from './pomodoro';
import settings from './settings';

const { length, shortBreak } = settings.pomodoro;

describe('pomodoro helpers', () => {
  describe('getNumberOfPomodoros', () => {
    it('should return zero pomodoros', () => {
      const time = length - 1;
      expect(getNumberOfPomodoros(time)).toBe(0);
    });

    it('should return one pomodoros', () => {
      expect(getNumberOfPomodoros(length)).toBe(1);
    });

    it('should return two pomodoros', () => {
      const time = 2 * length + shortBreak;
      expect(getNumberOfPomodoros(time)).toBe(2);
    });

    it('should return two pomodoros (2)', () => {
      const time = 2 * length + 2 * shortBreak;
      expect(getNumberOfPomodoros(time)).toBe(2);
    });

    it('should return three pomodoros', () => {
      const time = 3 * length + 2 * shortBreak;
      expect(getNumberOfPomodoros(time)).toBe(3);
    });

    it('should return four pomodoros', () => {
      const time = 4 * length + 3 * shortBreak;
      expect(getNumberOfPomodoros(time)).toBe(4);
    });
  });

  describe('getCurrentPomodoroInfo', () => {
    it('should return the state as active and the correct elapsed time', () => {
      const time = length - 1;
      const expected = {
        active: true,
        elapsedTime: time,
      };
      expect(getCurrentPomodoroInfo(time)).toEqual(expected);
    });

    it('should return the state as active and the correct elapsed time (2)', () => {
      const expectedElapsedTime = shortBreak - 1;
      const time = 4 * length + 4 * shortBreak + expectedElapsedTime;
      const expected = {
        active: true,
        elapsedTime: expectedElapsedTime,
      };
      expect(getCurrentPomodoroInfo(time)).toEqual(expected);
    });

    it('should return the state as inBreak and the correct elapsed time', () => {
      const expectedElapsedTime = shortBreak - 1;
      const time = length + expectedElapsedTime;
      const expected = {
        active: false,
        elapsedTime: expectedElapsedTime,
      };
      expect(getCurrentPomodoroInfo(time)).toEqual(expected);
    });

    it('should return the state as inBreak and the correct elapsed time (2)', () => {
      const expectedElapsedTime = shortBreak - 1;
      const time = 4 * length + 3 * shortBreak + expectedElapsedTime;
      const expected = {
        active: false,
        elapsedTime: expectedElapsedTime,
      };
      expect(getCurrentPomodoroInfo(time)).toEqual(expected);
    });
  });
});
