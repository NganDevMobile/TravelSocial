import React, {useState} from 'react';
import {Image} from 'react-native';
import {Block, Text, Button, Header} from '@components';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {width} from '@utils/responsive';

const Lab3 = () => {
  const navigation = useNavigation();
  return (
    <Block flex paddingHorizontal={16}>
      <Header title="Tính thể tích lập phương" canGoBack />
      <Block justifyCenter alignCenter>
        <Button
          containerStyle={{width: width - 32}}
          onPress={() => navigation.navigate(routes.DSSV)}
          title="Danh sách sinh viên"
        />
        <Button
          containerStyle={{width: width - 32}}
          onPress={() => navigation.navigate(routes.SCORE)}
          title="Điểm trung bình"
        />
      </Block>
    </Block>
  );
};

export default Lab3;
