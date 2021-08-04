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

const ChangePassword = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
        Đổi mật khẩu
      </Text>
      <Block marginTop={62}>
        <FormLogin
          isSecure
          label="Mật khẩu cũ"
          placeholder="Nhập email của bạn"
          onChangeText={text => setEmail(text)}
        />
        <FormLogin
          isSecure
          label="Mật khẩu mới"
          placeholder="Nhập email của bạn"
          onChangeText={text => setEmail(text)}
        />
        <FormLogin
          isSecure
          label="Nhập lại mật khẩu mới"
          placeholder="Nhập email của bạn"
          onChangeText={text => setEmail(text)}
        />
        <Button
          isSecure
          containerStyle={styles.containerStyle}
          titleStyle={styles.titleStyle}
          title="Gửi"
        />
      </Block>
    </Block>
  );
};

export default ChangePassword;
