/**
 *
 * Asynchronously loads the component for SignUpSteps
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
