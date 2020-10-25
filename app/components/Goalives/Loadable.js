/**
 *
 * Asynchronously loads the component for Goalive
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
