import { createSelector } from 'reselect';

const selectedTaskIdSelector = state => state.tasks.selected;
const tasksByIdSelector = state => state.tasks.byId;

export const selectedTaskSelector = createSelector(
  selectedTaskIdSelector,
  tasksByIdSelector,
  (selectedTaskId, tasksById) => (selectedTaskId ? tasksById[selectedTaskId] : null),
);

export const selectedTaskTitleSelector = createSelector(
  selectedTaskIdSelector,
  tasksByIdSelector,
  (selectedTaskId, tasksById) => (selectedTaskId ? tasksById[selectedTaskId].title : ''),
);

export const selectedTaskTimeSelector = createSelector(
  selectedTaskIdSelector,
  tasksByIdSelector,
  (selectedTaskId, tasksById) => (selectedTaskId ? tasksById[selectedTaskId].time : 0),
);

export const selectedTaskTimeMinutesSelector = createSelector(
  selectedTaskIdSelector,
  tasksByIdSelector,
  (selectedTaskId, tasksById) => {
    const time = selectedTaskId ? tasksById[selectedTaskId].time : 0;
    return Math.round(time / 60);
  },
);

export const selectedTaskTimeMinutesHoursSelector = createSelector(
  selectedTaskIdSelector,
  tasksByIdSelector,
  (selectedTaskId, tasksById) => {
    const time = selectedTaskId ? tasksById[selectedTaskId].time : 0;
    const hours = Math.floor(time / 60 / 60);

    return {
      hours,
      minutes: hours > 0 ? hours % 60 : Math.round(time / 60),
    };
  },
);

export const isTaskActiveSelector = createSelector(
  selectedTaskIdSelector,
  tasksByIdSelector,
  (selectedTaskId, tasksById) => {
    const start = selectedTaskId ? tasksById[selectedTaskId].start : null;
    return Boolean(start);
  },
);
