import React, {useState} from 'react';
import {TextInput} from 'react-native';
import axios from 'axios';
import {Block, Text, Button, Header} from '@components';
import {width} from '@utils/responsive';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';

const Bai1 = () => {
  const navigation = useNavigation();
  const [a, setA] = useState('');
  const [theTich, setTheTich] = useState('');
  const formData = new FormData();
  formData.append('canh', a);

  const fetchData = async data => {
    try {
      const resp = await axios({
        method: 'POST',
        url: 'http://10.0.2.2:8088/canh_POST.php',
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
      <Header title="Tính thể tích lập phương" canGoBack />
      <Block>
        <TextInput
          style={{
            borderColor: theme.colors.lightGray,
            borderWidth: 1 / 2,
            borderRadius: 5,
            paddingLeft: 20,
          }}
          placeholder="Chiều dài cạnh ?"
          onChangeText={text => setA(text)}
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

export default Bai1;
