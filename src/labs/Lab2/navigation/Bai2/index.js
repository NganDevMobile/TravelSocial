import React, {useState} from 'react';
import {TextInput} from 'react-native';
import axios from 'axios';
import {Block, Text, Button, Header} from '@components';
import {width} from '@utils/responsive';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import styles from './styles';

const Bai2 = () => {
  const navigation = useNavigation();
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [ketQua, setKetQua] = useState('');
  const formData = new FormData();
  formData.append('a', a);
  formData.append('b', b);
  formData.append('c', c);

  const fetchData = async data => {
    try {
      const resp = await axios({
        method: 'POSt',
        url: 'http://10.0.2.2:8088/giaiphuongtrinh_POST.php',
        data: data,
      });
      var obj = resp.data;
      console.log('success');
      console.log(obj);
      setKetQua(obj);
    } catch (err) {
      console.log('error');
    }
  };
  return (
    <Block flex paddingHorizontal={16}>
      <Header title="Phương trình bậc 2" canGoBack />
      <Block>
        <TextInput
          style={styles.input}
          placeholder="Số a ?"
          onChangeText={text => setA(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Số b ?"
          onChangeText={text => setB(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Số c ?"
          onChangeText={text => setC(text)}
        />

        <Button
          containerStyle={{width: width - 32}}
          title="Submit"
          onPress={() => fetchData(formData)}
        />
        <Text center marginTop={20}>
          Kết quả : {ketQua}
        </Text>
      </Block>
    </Block>
  );
};

export default Bai2;
