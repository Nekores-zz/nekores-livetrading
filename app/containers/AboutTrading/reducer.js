/*
 *
 * AboutTrading reducer
 *
 */

import { fromJS } from 'immutable';
import { constants as c } from './constants';

const initialState = fromJS({
  default: false,
  userInfo: [],
  playVideo: [],
  setVideos: {},
});
function aboutTradingReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state.set('default', !state.get('default'));
    case c.SET_ABOUTTRADING:
      return state.set('userInfo', action.payload);
    case c.SET_REPLYVIDEOS:
      return state
        .set('setVideos', action.payload)
        .set('playVideo', [...state.get('playVideo'), ...action.payload.playbacks]);

    default:
      return state;
  }
}

export default aboutTradingReducer;
