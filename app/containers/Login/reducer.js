/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { constants as c } from './constants';

const initialState = fromJS({
  default: false,
  user_information: {
    userId: null,
    name: '',
    email: '',
    picture: '',
  },
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state.set('default', !state.get('default'));
    case c.USER_INFO_ACTION:
      return state.set('user_information', action.payload);
    default:
      return state;
  }
}

export default loginReducer;
