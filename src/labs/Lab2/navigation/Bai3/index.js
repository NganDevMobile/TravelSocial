import React, {useState} from 'react';
import {TextInput} from 'react-native';
import axios from 'axios';
import {Block, Text, Button, Header} from '@components';
import {width} from '@utils/responsive';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import styles from './styles';

const Bai3 = () => {
  const navigation = useNavigation();
  const [dai, setDai] = useState('');
  const [rong, setRong] = useState('');
  const [theTich, setTheTich] = useState('');
  const formData = new FormData();
  formData.append('chieudai', dai);
  formData.append('chieurong', rong);

  const fetchData = async data => {
    try {
      const resp = await axios({
        method: 'POSt',
        url: 'http://10.0.2.2:8088/rectangle_POST.php',
        data: data,
      });
      var obj = resp.data;
      console.log('success');
      console.log(obj);
      setTheTich(obj);
    } catch (err) {
      console.log('error');
    }
  };
  return (
    <Block flex paddingHorizontal={16}>
      <Header title="Chu vi diện tích hình chữ nhật" canGoBack />
      <Block>
        <TextInput
          style={styles.input}
          placeholder="Chiều dài ?"
          onChangeText={text => setDai(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Chiều rộng ?"
          onChangeText={text => setRong(text)}
        />
        <Button
          containerStyle={{width: width - 32}}
          title="Submit"
          onPress={() => fetchData(formData)}
        />
        <Text center marginTop={20}>
          Kết quả : {theTich}
        </Text>
        <Button
          containerStyle={{width: width - 32}}
          onPress={() => navigation.goBack()}
          title="Quay lại"
        />
      </Block>
    </Block>
  );
};

export default Bai3;
