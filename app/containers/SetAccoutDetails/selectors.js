import { createSelector } from 'reselect';

/**
 * Direct selector to the setAccoutDetails state domain
 */
const selectSetAccoutDetailsDomain = (state) => state.get('setAccoutDetails');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SetAccoutDetails
 */

const makeSelectSetAccoutDetails = () => createSelector(
  selectSetAccoutDetailsDomain,
  (substate) => substate.toJS()
);

export default makeSelectSetAccoutDetails;
export {
  selectSetAccoutDetailsDomain,
};
