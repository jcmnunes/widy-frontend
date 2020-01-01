import { createSelector } from 'reselect';

const reportStateSelector = state => state.report;

export const daysLoadingSelector = createSelector(
  reportStateSelector,
  ({ daysLoading }) => daysLoading,
);
export const daysSelector = createSelector(reportStateSelector, ({ days }) => days);

export const reportLoadingSelector = createSelector(
  reportStateSelector,
  ({ reportLoading }) => reportLoading,
);
export const reportSelector = createSelector(reportStateSelector, ({ report }) => report);

export const timePerSectionSelector = createSelector(reportSelector, ({ tasks }) => {
  return tasks.reduce((acc, { section, time }) => {
    if (section.isPlan) {
      return acc;
    }

    if (section.id in acc) {
      acc[section.id].time += time;
    } else {
      acc[section.id] = {
        title: section.title,
        time,
      };
    }
    return acc;
  }, {});
});

export const timePerSectionPieChartDataSelector = createSelector(
  timePerSectionSelector,
  timePerSection =>
    Object.entries(timePerSection).map(([sectionId, section]) => ({
      id: sectionId,
      label: section.title,
      value: section.time,
    })),
);
