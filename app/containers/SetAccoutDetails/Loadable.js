/**
 *
 * Asynchronously loads the component for SetAccoutDetails
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
