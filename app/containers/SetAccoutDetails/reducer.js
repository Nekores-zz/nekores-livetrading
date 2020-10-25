/*
 *
 * SetAccoutDetails reducer
 *
 */

import { fromJS } from 'immutable';
import {
  constants as c,
} from './constants';

const initialState = fromJS({
  default: false,
  setUserinfo: {},
});

function setAccoutDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state.set('default', !state.get('default'));
    case c.SET_USERINFO:
      return state.set('setUserinfo', action.payload);
    default:
      return state;
  }
}

export default setAccoutDetailsReducer;
