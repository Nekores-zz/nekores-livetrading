/**
 *
 * Asynchronously loads the component for ReplayInfo
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
