import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Repositorios from '~/pages/Repositorios';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createSwitchNavigator({
    Repositorios,
    Issues,
  }),
);

export default Routes;
