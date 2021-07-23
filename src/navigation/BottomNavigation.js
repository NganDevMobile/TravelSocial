import CustomTabBar from '@navigation/CustomTabBar';
import {routes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom} from '@screens/Bottom';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={bottom.HOME_SCREEN}
        options={{
          tabBarLabel: 'Trang chủ',
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={bottom.NOTIFICATION_SCREEN}
        options={{
          tabBarLabel: 'Thông báo',
        }}
      />
      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={bottom.PROFILE_SCREEN}
        options={{
          tabBarLabel: 'Cá nhân',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
