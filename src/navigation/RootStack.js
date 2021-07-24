import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {routes} from '../navigation/routes';
import BottomNavigation from './BottomNavigation';
import {auth} from '@screens/Auth';
import {common} from '@screens/Common';
import {bottom} from '@screens/Bottom';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      <Stack.Navigator
        mode="modal"
        initialRouteName={routes.BOTTOM_TAB}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.BOTTOM_TAB} component={BottomNavigation} />
        <Stack.Screen
          name={routes.OPTION_SCREEN}
          component={auth.OPTION_SCREEN}
        />
        <Stack.Screen
          name={routes.LOGIN_SCREEN}
          component={auth.LOGIN_SCREEN}
        />
        <Stack.Screen
          name={routes.SIGNUP_SCREEN}
          component={auth.SIGNUP_SCREEN}
        />
        <Stack.Screen
          name={routes.SEARCH_SCREEN}
          component={common.SEARCH_SCREEN}
        />
        <Stack.Screen
          name={routes.PERSONAL_POST}
          component={bottom.PERSONAL_POST}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
