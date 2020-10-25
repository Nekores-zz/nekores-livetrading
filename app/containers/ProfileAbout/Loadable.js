/**
 *
 * Asynchronously loads the component for ProfileAbout
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
