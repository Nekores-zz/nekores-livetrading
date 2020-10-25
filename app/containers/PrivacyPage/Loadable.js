/**
 *
 * Asynchronously loads the component for PrivacyPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
