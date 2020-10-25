/**
 *
 * Asynchronously loads the component for AboutTrading
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
