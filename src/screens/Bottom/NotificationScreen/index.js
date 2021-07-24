import {Block, Header} from '@components';
import ItemNotification from '@components/Common/ItemList/ItemNotification';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NotificationScreen = () => {
  const navigation = useNavigation();
  const _onPress = () => {
    navigation.navigate(routes.ONBOARDING_SCREEN);
  };

  const _renderItem = ({item}) => (
    <ItemNotification
      item_id={item.item_id}
      title={item.title}
      content={item.content}
      picture={item.picture}
      date_create={item.date_create}
      isReading={item.status === 'readed'}
      status={item.status}
    />
  );

  return (
    <Block flex backgroundColor="background">
      <Header title="Thông báo hệ thống" />
      <FlatList
        data={data}
        keyExtractor={item => item.item_id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default NotificationScreen;
