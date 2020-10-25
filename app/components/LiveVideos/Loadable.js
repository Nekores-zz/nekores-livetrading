/**
 *
 * Asynchronously loads the component for LiveVideos
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
