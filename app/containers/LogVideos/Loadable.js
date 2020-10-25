/**
 *
 * Asynchronously loads the component for LogVideos
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
