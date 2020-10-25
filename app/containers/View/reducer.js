/*
 *
 * View reducer
 *
 */

import { fromJS } from 'immutable';
import { constants as c } from './constants';

const initialState = fromJS({
  default: false,
  current_channel: {},
  users: {},
  broadcasters: undefined,
  publicuser: {},
  setPublishplaybacks: {},
});
function viewReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state.set('default', !state.get('default'));
    case c.CURRENT_CHANNEL_ACTION:
      return state.set('current_channel', action.payload);
    case c.SET_VIDEO:
      return state.set('users', action.payload);
    case c.SET_PLAYBACKS:
      return state.set('broadcasters', action.payload);
    case c.SET_PUBLICUSER:
      return state.set('publicuser', action.payload);
    case c.SET_PUBLISHPLAYBACKS:
      return state.set('setPublishplaybacks', action.payload);
    default:
      return state;
  }
}

export default viewReducer;
