import {icons} from '@assets';
import {Block, Button, Text, TextInput} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Image, Pressable, ToastAndroid} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import FormLogin from '../Common/FormLogin';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const LoginScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log('aaaaaaaa', email, password);

  const _login = (email, password) => {
    if (email == null || password == null) {
      console.log('Vui lòng nhập đủ!');
      ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
    } else {
      var Data = {
        email: email,
        password: password,
      };

      fetch('http://10.0.2.2:8088/views/user_login.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
      })
        .then(response => response.json())
        .then(response => {
          console.log('response: ');
          console.log(response);
          if (response.is_auth == true) {
            navigation.navigate(routes.BOTTOM_TAB);
            ToastAndroid.show('Thành công!', ToastAndroid.SHORT);
          } else {
            ToastAndroid.show('Thất bại!', ToastAndroid.SHORT);
          }
        })
        .catch(error => console.error('>>>>>>>>', error));
    }
  };
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
        Đăng nhập
      </Text>
      <Block marginTop={62}>
        <FormLogin
          label="Email"
          placeholder="Nhập email của bạn"
          onChangeText={text => setEmail(text)}
        />
        <FormLogin
          isSecure
          label="Password"
          placeholder="************"
          onChangeText={text => setPassword(text)}
        />
        <Button
          onPress={() => _login(email, password)}
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          title="Đăng nhập"
        />
        <Block row alignCenter justifyCenter marginTop={15}>
          <Text color={theme.colors.gray}>Bạn chưa có tài khoản ? </Text>
          <Pressable onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}>
            <Text>Đăng ký</Text>
          </Pressable>
        </Block>
        <Block alignCenter marginTop={10}>
          <Pressable
            onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}>
            <Text>Quên mật khẩu ?</Text>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default LoginScreen;
