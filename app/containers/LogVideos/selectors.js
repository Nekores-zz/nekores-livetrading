import { createSelector } from 'reselect';

/**
 * Direct selector to the logVideos state domain
 */
const selectLogVideosDomain = (state) => state.get('logVideos');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LogVideos
 */

const makeSelectLogVideos = () => createSelector(
  selectLogVideosDomain,
  (substate) => substate.toJS()
);

export default makeSelectLogVideos;
export {
  selectLogVideosDomain,
};
