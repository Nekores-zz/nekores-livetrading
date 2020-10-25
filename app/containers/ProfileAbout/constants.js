/*
 *
 * ProfileAbout constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions(
  [
    'default_action.toProps',
    'aboutuser_action.toProps.payload',
    'set_aboutusers.payload',
    'abouttrading_action.toProps.payload',
    'set_abouttrading.payload',
    'follow_action.toProps.payload',
    'unfollow_action.toProps.payload',
    'delete_action.toProps.payload',

  ], 'APP/TODOS');

export {
  constants,
  actions,
  toProps,
  propTypes,
};
