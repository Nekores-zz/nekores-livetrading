import { createSelector } from 'reselect';

/**
 * Direct selector to the privacyPage state domain
 */
const selectPrivacyPageDomain = (state) => state.get('privacyPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PrivacyPage
 */

const makeSelectPrivacyPage = () => createSelector(
  selectPrivacyPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectPrivacyPage;
export {
  selectPrivacyPageDomain,
};
