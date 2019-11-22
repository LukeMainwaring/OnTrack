import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { setNavigator } from './src/navigationRef';

import configureStore from './configureStore';
const store = configureStore();

const theme = {
  colors: {
    primary: '#42AEC6'
  }
};

const DrawerRouteConfigs = {
  Home: { screen: HomeScreen },
  Account: { screen: AccountScreen }
};

const DrawerNavigatorConfig = {
  drawerWidth: 500,
  drawerPosition: 'left',
  initialRouteName: 'Home'
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createDrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfig)
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </ThemeProvider>
    </Provider>
  );
};
