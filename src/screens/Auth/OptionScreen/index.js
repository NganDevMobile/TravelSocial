import {icons, images} from '@assets';
import {Block, Button, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const OptionScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Block flex alignCenter justifyCenter paddingHorizontal={16}>
      <Pressable
        onPress={() => navigation.navigate(routes.BOTTOM_TAB)}
        style={styles.next}>
        <Block>
          <Text center>Bỏ qua</Text>
        </Block>
      </Pressable>
      <Image resizeMode="contain" source={images.option} style={styles.logo} />
      <Button
        onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
        containerStyle={styles.containerStyle}
        titleStyle={styles.titleStyle}
        title="Đăng nhập"
      />
      <Pressable
        onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}
        style={styles.signup}>
        <Text center size={17} fontType="bold">
          Đăng ký
        </Text>
      </Pressable>
    </Block>
  );
};

export default OptionScreen;
