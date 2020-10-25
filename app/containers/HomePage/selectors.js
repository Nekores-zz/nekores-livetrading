import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = (state) => state.get('homePage');

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, (substate) => substate ? fromJS(substate).toJS() : {});

const makeSelectBroadcasters = () =>
  createSelector(selectHomePageDomain, (substate) =>
    substate.get('get_broadcasters')
  );

export default makeSelectHomePage;
export { selectHomePageDomain, makeSelectBroadcasters };
