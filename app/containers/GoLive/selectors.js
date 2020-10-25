import { createSelector } from 'reselect';

/**
 * Direct selector to the goLive state domain
 */
const selectGoLiveDomain = (state) => state.get('goLive');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GoLive
 */

const makeSelectGoLive = () => createSelector(
  selectGoLiveDomain,
  (substate) => substate.toJS()
);

const makeSelectPublishRTMP = () => createSelector(
  selectGoLiveDomain,
  (substate) => substate.toJS('publishRTMPURL')
);

export {
  makeSelectGoLive,
  selectGoLiveDomain,
  makeSelectPublishRTMP,
};
