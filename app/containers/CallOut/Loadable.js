/**
 *
 * Asynchronously loads the component for CallOut
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
