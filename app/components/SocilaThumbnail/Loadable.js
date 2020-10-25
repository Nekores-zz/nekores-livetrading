/**
 *
 * Asynchronously loads the component for SocilaThumbnail
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
