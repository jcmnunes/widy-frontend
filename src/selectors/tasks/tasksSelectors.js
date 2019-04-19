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
