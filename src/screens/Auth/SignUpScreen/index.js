import {icons} from '@assets';
import {Block, Button, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Image, Pressable, ToastAndroid} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FormLogin from '../Common/FormLogin';
import styles from './styles';
import {routes} from '@navigation/routes';

const SignupScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const _register = (email, password, confirm) => {
    if (email == null || password == null || confirm == null) {
      console.log('Vui lòng nhập đủ!');
      ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
    } else if (password != confirm) {
      console.log('Mật khẩu không trùng khớp!');
      ToastAndroid.show('Mật khẩu không trùng khớp!', ToastAndroid.SHORT);
    } else {
      var Data = {
        email: email,
        password: password,
        confirm_password: confirm,
      };

      fetch('http://10.0.2.2:8088/views/user_register.php', {
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
          console.log('Đăng ký thành công!');
          ToastAndroid.show('Đăng ký thành công!', ToastAndroid.SHORT);
        });
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
        Đăng ký
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
        <FormLogin
          isSecure
          label="Password confim"
          placeholder="************"
          onChangeText={text => setConfirm(text)}
        />
        <Button
          onPress={() => _register(email, password, confirm)}
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
