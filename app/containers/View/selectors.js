import { createSelector } from 'reselect';
/**
 * Direct selector to the view state domain
 */
const selectViewDomain = (state) => state.get('view');

/**
 * Other specific selectors
 */

/**
 * Default selector used by View
 */

const makeSelectViewDetails = () =>
  createSelector(
    selectViewDomain,
    (substate) => (substate ? substate.toJS() : null)
  );

export default makeSelectViewDetails;

export { selectViewDomain };
