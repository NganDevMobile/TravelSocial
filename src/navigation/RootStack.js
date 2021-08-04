import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {routes} from '../navigation/routes';
import BottomNavigation from './BottomNavigation';
import {auth} from '@screens/Auth';
import {common} from '@screens/Common';
import {bottom} from '@screens/Bottom';
import {labs} from '../labs';

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
          name={routes.HOME_SCREEN}
          component={bottom.HOME_SCREEN}
        />
        <Stack.Screen
          name={routes.NOTIFICATION_SCREEN}
          component={bottom.NOTIFICATION_SCREEN}
        />
        <Stack.Screen
          name={routes.PROFILE_SCREEN}
          component={bottom.PROFILE_SCREEN}
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
          name={routes.FORGOT_PASSWORD}
          component={auth.FORGOT_PASSWORD}
        />
        <Stack.Screen
          name={routes.PERSONAL_POST}
          component={bottom.PERSONAL_POST}
        />
        <Stack.Screen
          name={routes.CHANGE_PASSWORD}
          component={auth.CHANGE_PASSWORD}
        />
        <Stack.Screen
          name={routes.INSERT_POST}
          component={common.INSERT_POST}
        />
        {/* Labs */}
        <Stack.Screen name={routes.LAB_ONE} component={labs.LAB_ONE} />
        <Stack.Screen name={routes.LAB_TWO} component={labs.LAB_TWO} />
        <Stack.Screen name={routes.BAI_MOT} component={labs.BAI_MOT} />
        <Stack.Screen name={routes.BAI_HAI} component={labs.BAI_HAI} />
        <Stack.Screen name={routes.BAI_BA} component={labs.BAI_BA} />
        <Stack.Screen name={routes.LAB_THREE} component={labs.LAB_THREE} />
        <Stack.Screen name={routes.DSSV} component={labs.DSSV} />
        <Stack.Screen name={routes.SCORE} component={labs.SCORE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
