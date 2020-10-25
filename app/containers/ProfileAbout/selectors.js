import { createSelector } from 'reselect';

/**
 * Direct selector to the profileAbout state domain
 */
const selectProfileAboutDomain = (state) => state.get('profileAbout');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfileAbout
 */

const makeSelectProfileAbout = () => createSelector(
  selectProfileAboutDomain,
  (substate) => substate.toJS()
);

export default makeSelectProfileAbout;
export {
  selectProfileAboutDomain,
};
