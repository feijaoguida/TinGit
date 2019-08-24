import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Login from './pages/Login';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
    })
);