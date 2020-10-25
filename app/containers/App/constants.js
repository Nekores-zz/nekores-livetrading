/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOGIN_USER = 'boilerplate/App/LOGIN_USER';
export const LOGOUT_USER = 'baoilerplate/App/LOGOUT_USER';
export const UPDATE_USER = 'boilerplate/App/UPDATE_USER';
export const TWITTER_LOGIN = 'boilerplate/App/TWITTER_LOGIN';
export const TWITTER_OUT = 'boilerplate/App/TWITTER_LOGOUT';
export const SET_TOKEN = 'boilerplate/App/UPDATE_TOKEN';
export const DEFAULT_LOCALE = 'en';

// export { constants, actions, toProps, propTypes };
