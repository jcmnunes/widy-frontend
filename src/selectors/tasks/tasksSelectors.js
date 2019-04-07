import { createSelector } from 'reselect';

const selectedTaskIdSelector = state => state.tasks.selected;
const tasksByIdSelector = state => state.tasks.byId;

// eslint-disable-next-line
export const selectedTaskSelector = createSelector(
  selectedTaskIdSelector,
  tasksByIdSelector,
  (selectedTaskId, tasksById) => (selectedTaskId ? tasksById[selectedTaskId] : null),
);
