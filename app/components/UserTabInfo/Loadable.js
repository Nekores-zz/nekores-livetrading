/**
 *
 * Asynchronously loads the component for UserTabInfo
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
