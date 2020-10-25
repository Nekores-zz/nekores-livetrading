/**
 *
 * Asynchronously loads the component for Blockusers
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
