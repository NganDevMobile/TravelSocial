import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from '@assets';

const HeaderProfile = ({icon, content}) => {
  const {top} = useSafeAreaInsets();
  return (
    <Block row alignCenter paddingTop={top + 10}>
      <Image
        source={{
          uri: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/150472038_1049544385539282_5292912049991540628_n.jpg?_nc_cat=102&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BpVzwAQW2IcAX__sWDg&_nc_ht=scontent-sin6-2.xx&oh=7eeca5e5b5e33f247fc4f6acce9a0dd0&oe=60FEDA1B',
        }}
        style={styles.avt}
      />
      <Block marginLeft={10}>
        <Text size={17} fontType="bold">
          Hiếu Ngân
        </Text>
        <Text>nganlth.devmobile@gmail.com</Text>
      </Block>
    </Block>
  );
};

export default HeaderProfile;