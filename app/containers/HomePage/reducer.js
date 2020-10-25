/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { constants as c } from './constants';

const initialState = fromJS({
  default: false,
  userInfoLoading: true,
  get_broadcasters: [],
  playbacks: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state.set('default', !state.get('default')).set('playbacks', []);
    case c.SET_LOADING:
      return state.set('userInfoLoading', action.payload);
    case c.POPULAR_ACTION:
      return state.set('get_broadcasters', action.payload);
    case c.SET_VIDEOS:
      return state
        .set('sortBroadcasters', action.payload)
        .set('playbacks', [...state.get('playbacks'), ...action.payload.replays.playbacks]);
    case c.SET_LOGINUSEEDETAIL:
      return state.set('setAbouttrading', action.payload);
    default:
      return state;
  }
}

export default homePageReducer;

