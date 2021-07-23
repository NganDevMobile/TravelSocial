import {icons} from '@assets';
import {Block, Button, Text, TextInput} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import FormLogin from '../Common/FormLogin';
import {useNavigation} from '@react-navigation/core';
import {routes} from './../../../navigation/routes';

const SignupScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Block paddingTop={top + 10} paddingHorizontal={16}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          resizeMode="contain"
          source={icons.back}
          style={styles.iconBack}
        />
      </Pressable>
      <Text size={24} marginTop={15} fontType="bold">
        Đăng ký
      </Text>
      <Block marginTop={62}>
        <FormLogin label="Fullname" placeholder="Nhập tên của bạn" />
        <FormLogin label="Email" placeholder="Nhập email của bạn" />
        <FormLogin isSecure label="Password" placeholder="************" />
        <FormLogin
          isSecure
          label="Password confim"
          placeholder="************"
        />
        <Button
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          title="Đăng ký"
        />
        <Block row alignCenter justifyCenter marginTop={15}>
          <Text color={theme.colors.gray}>Bạn đã có tài khoản ? </Text>
          <Pressable onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}>
            <Text>Đăng nhập</Text>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default SignupScreen;
