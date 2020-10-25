/**
 *
 * Asynchronously loads the component for GoLive
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
