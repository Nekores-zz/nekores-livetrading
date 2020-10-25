/*
 *
 * Settings constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions([
  'default_action.toProps',
  'updateemail_action.toProps.payload',
  'set_updateemail.payload',
  'userinfo_action.toProps.payload',
  'set_userinfo.payload',
], 'APP/TODOS');

export {
  constants,
  actions,
  toProps,
  propTypes,
};
