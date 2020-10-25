
import { fromJS } from 'immutable';
import viewReducer from '../reducer';

describe('viewReducer', () => {
  it('returns the initial state', () => {
    expect(viewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
