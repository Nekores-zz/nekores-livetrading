/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('authenticated')
  );

const appAccessToken = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('appAccess')
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('loading')
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('error')
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.getIn(['userData', 'repositories'])
  );

const makeSelectLocation = () =>
  createSelector(
    selectRoute,
    (routeState) => routeState.get('location').toJS()
  );

const loginUser = () =>
  createSelector(
    selectGlobal,
    (globalState) => {
      const state = globalState.get('loginuser');
      if (state !== null && state.toJS !== undefined) {
        return state.toJS(); // if it is immutable object, convert into raw js
      } else if (state !== null && state.toJS === undefined) {
        return state;
      }
      return null;
    }
  );
export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  loginUser,
  appAccessToken,
};
