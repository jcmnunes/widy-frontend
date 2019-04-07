import { createSelector } from 'reselect';

const selectedDayIdSelector = state => state.days.selected;
const daysByIdSelector = state => state.days.byId;

// eslint-disable-next-line
export const selectedDaySelector = createSelector(
  selectedDayIdSelector,
  daysByIdSelector,
  (selectedDayId, daysById) => (selectedDayId ? daysById[selectedDayId] : null),
);
