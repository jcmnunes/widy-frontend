import * as types from './types';

// eslint-disable-next-line
export const storeSelectedSectionId = sectionId => ({
  type: types.STORE_SELECTED_SECTION_ID,
  sectionId,
});
