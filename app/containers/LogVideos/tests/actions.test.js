
import {
  actions as a,
  constants as c,
} from '../constants';

describe('LogVideos actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: c.DEFAULT_ACTION,
      };
      expect(a.defaultAction()).toEqual(expected);
    });
  });
});
