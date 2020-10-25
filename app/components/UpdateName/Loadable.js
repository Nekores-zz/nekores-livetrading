/**
 *
 * Asynchronously loads the component for UpdateName
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
