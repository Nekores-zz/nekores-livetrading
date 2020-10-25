/*
 *
 * SetAccoutDetails constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions([
  'default_action.toProps',
  'updatename_action.toProps.payload',
  'userinfo_action.toProps.payload',
  'set_userinfo.payload',
], 'APP/TODOS');

export {
  constants,
  actions,
  toProps,
  propTypes,
};
