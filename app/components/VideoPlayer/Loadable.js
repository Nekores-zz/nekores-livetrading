/**
 *
 * Asynchronously loads the component for VideoPlayer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
