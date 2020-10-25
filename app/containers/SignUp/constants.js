/*
 *
 * SignUp constants
 *
 */
import generateActions from 'utils/actionGenerator';

const { constants, actions, toProps, propTypes } = generateActions(
  ['default_action.toProps', 'signup_action.toProps.payload'],
  'APP/TODOS'
);

export { constants, actions, toProps, propTypes };
