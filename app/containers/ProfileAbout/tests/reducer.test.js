
import { fromJS } from 'immutable';
import profileAboutReducer from '../reducer';

describe('profileAboutReducer', () => {
  it('returns the initial state', () => {
    expect(profileAboutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
