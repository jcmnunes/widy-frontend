import { createSelector } from 'reselect';

const selectedTaskIdSelector = state => state.tasks.selected;
const tasksByIdSelector = state => state.tasks.byId;
const planSectionIdSelector = state => state.sections.order[0];
const sectionsByIdSelector = state => state.sections.byId;

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

export const isSelectedTaskInPlanSelector = createSelector(
  selectedTaskIdSelector,
  planSectionIdSelector,
  sectionsByIdSelector,
  (selectedTaskId, planSectionId, sectionsById) => {
    if (selectedTaskId && planSectionId) {
      return sectionsById[planSectionId].tasks.includes(selectedTaskId);
    }
    return false;
  },
);

export const noTasksSelector = createSelector(
  tasksByIdSelector,
  tasksById => Object.keys(tasksById).length === 0,
);
