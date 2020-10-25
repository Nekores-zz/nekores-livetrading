/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import * as c from './constants';

export const loginUserAction = (payload) => ({
  type: c.LOGIN_USER,
  payload,
});

export const logoutUserAction = () => ({
  type: c.LOGOUT_USER,
});

export const UpdateUserAction = (payload) => ({
  type: c.UPDATE_USER,
  payload,
});

export const UpdateSetTokenAction = (payload) => ({
  type: c.SET_TOKEN,
  payload,
});
