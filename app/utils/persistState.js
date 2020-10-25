const stateName = 'state-golive';
/**
 * Loads state from storage
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(stateName);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return null;
  }
};

/**
 *
 * @param {Object} state to be stored.
 */
// eslint-disable-next-line
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState);
  } catch (error) {
    return false;
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem(stateName);
    return true;
  } catch (error) {
    return false;
  }
};
