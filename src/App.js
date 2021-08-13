/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootStack from '@navigation/RootStack';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

const App = () => {
  messaging()
    .getToken()
    .then(fcmToken => {
      if (fcmToken) {
        console.log('token', fcmToken);
      } else {
        // user doesn't have a device token yet
      }
    });

  messaging().onMessage(async remoteMessage => {
    Alert.alert('!', JSON.stringify(remoteMessage));
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('onNotificationOpenedApp', remoteMessage);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state',
          JSON.stringify(remoteMessage.notification),
        );
      }
    });
  return <RootStack />;
};

export default App;
