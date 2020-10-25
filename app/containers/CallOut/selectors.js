import { createSelector } from 'reselect';

/**
 * Direct selector to the callOut state domain
 */
const selectCallOutDomain = (state) => state.get('callOut');

/**
 * Other specific selectors
 */

/**
 * Default selector used by CallOut
 */

const makeSelectCallOut = () =>
  createSelector(selectCallOutDomain, (substate) => substate.toJS());

export default makeSelectCallOut;
export { selectCallOutDomain };
