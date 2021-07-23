import React, {useState} from 'react';
import {Image} from 'react-native';
import {Block, Text, Button, Header} from '@components';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {width} from '@utils/responsive';

const Lab2 = () => {
  const navigation = useNavigation();
  return (
    <Block flex paddingHorizontal={16}>
      <Header title="Lab 2" canGoBack />
      <Block>
        <Button
          containerStyle={{width: width - 32}}
          onPress={() => navigation.navigate(routes.BAI_MOT)}
          title="Thể tích hình lập phương"
        />
        <Button
          containerStyle={{width: width - 32}}
          onPress={() => navigation.navigate(routes.BAI_HAI)}
          title="Giải phương trình bậc hai"
        />
        <Button
          containerStyle={{width: width - 32}}
          onPress={() => navigation.navigate(routes.BAI_BA)}
          title="Chu vi chiều dài hình chữ nhật"
        />
        <Button
          containerStyle={{width: width - 32}}
          onPress={() => navigation.navigate(routes.LAB_THREE)}
          title="Lab 3"
        />
      </Block>
    </Block>
  );
};

export default Lab2;
