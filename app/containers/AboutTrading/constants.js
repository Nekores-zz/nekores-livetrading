/*
 *
 * AboutTrading constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions(
  [
    'default_action.toProps',
    'abouttrading_action.toProps.payload',
    'set_abouttrading.payload',
    'followuser_action.toProps.payload',
    'follow_action.toProps.payload',
    'unfollow_action.toProps.payload',
    'delete_action.toProps.payload',

    'videos_action.toProps.payload',
    'set_replyvideos.payload',
  ],
  'APP/TODOS'
);

export { constants, actions, toProps, propTypes };
