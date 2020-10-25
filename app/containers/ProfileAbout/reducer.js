/*
 *
 * ProfileAbout reducer
 *
 */

import { fromJS } from 'immutable';
import {
  constants as c,
} from './constants';

const initialState = fromJS({
  default: false,
  findBroadcaster: '',
  userInfo: '',
});
function profileAboutReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state.set('default', !state.get('default'));
    case c.SET_ABOUTUSERS:
      return state.set('findBroadcaster', action.payload);
    case c.SET_ABOUTTRADING:
      return state.set('userInfo', action.payload);
    default:
      return state;
  }
}

export default profileAboutReducer;
