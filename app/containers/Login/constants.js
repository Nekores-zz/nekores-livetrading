/*
 *
 * Login constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions(
  [
    'default_action.toProps',
    'social_Signup_action.toProps',
    'user_info_action.toProps',
  ],
  'APP/TODOS'
);

export { constants, actions, toProps, propTypes };
