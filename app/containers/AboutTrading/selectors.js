import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the aboutTrading state domain
 */
const selectAboutTradingDomain = (state) => state.get('aboutTrading');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AboutTrading
 */

const makeSelectAboutTrading = () => createSelector(
  selectAboutTradingDomain,
  (substate) => substate && fromJS(substate).toJS() || null
);

export default makeSelectAboutTrading;
export {
  selectAboutTradingDomain,
};
