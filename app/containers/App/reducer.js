/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import { loadState, clearState, saveState } from 'utils/persistState';
import { loadAppToken, clearAppToken } from 'utils/saveAppToken';
import * as c from './constants';

const state = loadState();
const appAccessToken = loadAppToken();

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  loginuser: state,
  authenticated: state !== null,
  appAccess: appAccessToken,
  updateUserToken: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case c.LOGIN_USER:
      return state
        .set('loginuser', action.payload)
        .set('authenticated', true);
    case c.LOGOUT_USER:
      clearState();
      clearAppToken();
      return state
        .set('loginuser', null)
        .set('authenticated', false);
    case c.SET_TOKEN:
      return state.set('appAccess', action.payload || {});
    case c.UPDATE_USER: {
      const prevstate = { ...state.get('loginuser') };
      const { name, value } = action.payload;
      prevstate[name] = value;
      saveState(prevstate);
      return state.set('loginuser', prevstate);
    }
    default:
      return state;
  }
}

export default appReducer;
