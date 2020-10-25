
import { fromJS } from 'immutable';
import setAccoutDetailsReducer from '../reducer';

describe('setAccoutDetailsReducer', () => {
  it('returns the initial state', () => {
    expect(setAccoutDetailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
