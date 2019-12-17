import { createSelector } from 'reselect';
import { meSelector } from '../users/userSelectors';

export const scopesSelector = createSelector(meSelector, ({ scopes }) => scopes);

export const scopesOptionsSelector = createSelector(scopesSelector, scopes =>
  scopes.map(({ id, name, shortCode }) => ({
    value: id,
    label: name,
    shortCode,
  })),
);
