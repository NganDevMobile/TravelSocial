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

const ForgotPassword = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const _fogotPassword = email => {
    if (email == null) {
      ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
    } else {
      var Data = {
        email: email,
        password: '$$^#^#$@@@#$$^&^$%#',
      };

      fetch('http://10.0.2.2:8088/views/user_forgot_password.php', {
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
          ToastAndroid.show(
            'Vui lòng kiểm tra email của bạn',
            ToastAndroid.SHORT,
          );
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
        Nhập email tài khoản
      </Text>
      <Block marginTop={62}>
        <FormLogin
          label="Email"
          placeholder="Nhập email của bạn"
          onChangeText={text => setEmail(text)}
        />
        <Button
          onPress={() => _fogotPassword(email)}
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          title="Gửi"
        />
      </Block>
    </Block>
  );
};

export default ForgotPassword;
