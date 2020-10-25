/**
 *
 * Asynchronously loads the component for BroadcastDetail
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
