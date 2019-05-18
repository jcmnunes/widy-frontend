import { getNumberOfPomodoros, getCurrentPomodoroInfo, getTotalTime } from './pomodoro';

const length = 25;
const shortBreak = 5;

jest.mock('./settings.js', () => () => ({
  pomodoro: {
    length: 25,
    shortBreak: 5,
  },
}));

describe('pomodoro helpers', () => {
  describe('getNumberOfPomodoros', () => {
    it('should return zero pomodoros', () => {
      const time = length * 60 - 1;
      expect(getNumberOfPomodoros(time)).toBe(0);
    });

    it('should return one pomodoros', () => {
      expect(getNumberOfPomodoros(length * 60)).toBe(1);
    });

    it('should return two pomodoros', () => {
      const time = 2 * length * 60 + shortBreak * 60;
      expect(getNumberOfPomodoros(time)).toBe(2);
    });

    it('should return two pomodoros (2)', () => {
      const time = 2 * length * 60 + 2 * shortBreak * 60;
      expect(getNumberOfPomodoros(time)).toBe(2);
    });

    it('should return three pomodoros', () => {
      const time = 3 * length * 60 + 2 * shortBreak * 60;
      expect(getNumberOfPomodoros(time)).toBe(3);
    });

    it('should return four pomodoros', () => {
      const time = 4 * length * 60 + 3 * shortBreak * 60;
      expect(getNumberOfPomodoros(time)).toBe(4);
    });
  });

  describe('getCurrentPomodoroInfo', () => {
    it('should return the state as active and the correct elapsed time', () => {
      const time = length * 60 - 1;
      const expected = {
        inBreak: false,
        elapsedTime: '24 : 59',
      };
      expect(getCurrentPomodoroInfo(time)).toEqual(expected);
    });

    it('should return the state as active and the correct elapsed time (2)', () => {
      const expectedElapsedTime = shortBreak * 60 - 1;
      const time = 4 * length * 60 + 4 * shortBreak * 60 + expectedElapsedTime;
      const expected = {
        inBreak: false,
        elapsedTime: '4 : 59',
      };
      expect(getCurrentPomodoroInfo(time)).toEqual(expected);
    });

    it('should return the state as inBreak and the correct elapsed time', () => {
      const expectedElapsedTime = shortBreak * 60 - 1;
      const time = length * 60 + expectedElapsedTime;
      const expected = {
        inBreak: true,
        elapsedTime: '4 : 59',
      };
      expect(getCurrentPomodoroInfo(time)).toEqual(expected);
    });

    it('should return the state as inBreak and the correct elapsed time (2)', () => {
      const expectedElapsedTime = shortBreak * 60 - 1;
      const time = 4 * length * 60 + 3 * shortBreak * 60 + expectedElapsedTime;
      const expected = {
        inBreak: true,
        elapsedTime: '4 : 59',
      };
      expect(getCurrentPomodoroInfo(time)).toEqual(expected);
    });
  });

  describe('getTotalTime', () => {
    it('should return the correct total time (more than 1 hour)', () => {
      const time = 3600 + 57.5 * 60;
      const expected = {
        hours: 1,
        minutes: 57,
      };

      expect(getTotalTime(time).hours).toBe(expected.hours);
      expect(getTotalTime(time).minutes).toBe(expected.minutes);
    });

    it('should return the correct total time (less than 1 hour)', () => {
      const time = 54 * 60;
      const expected = {
        hours: 0,
        minutes: 54,
      };

      expect(getTotalTime(time).hours).toBe(expected.hours);
      expect(getTotalTime(time).minutes).toBe(expected.minutes);
    });

    it('should return the correct total time (less than 1 minute)', () => {
      const time = 54;
      const expected = {
        hours: 0,
        minutes: 0,
      };

      expect(getTotalTime(time).hours).toBe(expected.hours);
      expect(getTotalTime(time).minutes).toBe(expected.minutes);
    });
  });
});
