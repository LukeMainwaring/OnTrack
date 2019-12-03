import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

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
    primary: '#4EC6D6'
  }
};

const DrawerRouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: <MaterialIcons name='home' style={{ fontSize: 28 }} />
    }
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      drawerLabel: 'Account',
      drawerIcon: <MaterialIcons name='person' style={{ fontSize: 28 }} />
    }
  }
};

const DrawerNavigatorConfig = {
  drawerWidth: 320,
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
