/*
 *
 * GoLive reducer
 *
 */

import { fromJS } from 'immutable';
import { constants as c } from './constants';

const initialState = fromJS({
  default: false,
  publishRTMPURL: {},
  rtmurl: {},
  name: '',
  twitter: '',
});
function goLiveReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state.set('default', !state.get('default'));
    case c.UPDATE_RMTP_ACTION:
      return state.set('publishRTMPURL', action.payload);
    case c.SET_GENRATEKEY:
      return state.set('rtmurl', action.payload);
    case c.SET_USERINFO:
      return state.set('userinfo', action.payload);
    case c.SET_UPDATENAME:
      return state.set('name', action.payload);
    case c.SET_TWITTER:
      return state.set('twitter', action.payload);
    default:
      return state;
  }
}

export default goLiveReducer;
