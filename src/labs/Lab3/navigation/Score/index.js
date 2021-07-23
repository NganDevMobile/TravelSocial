import {Block, Button, Header, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {width} from '@utils/responsive';
import axios from 'axios';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const Score = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [html, setHtml] = useState('');
  const [javascript, setJavaScript] = useState('');
  const [java, setJava] = useState('');
  const [ketQua, setKetQua] = useState('');
  const formData = new FormData();
  formData.append('name', name);
  formData.append('html', html);
  formData.append('javascript', javascript);
  formData.append('java', java);

  const fetchData = async data => {
    try {
      const resp = await axios({
        method: 'POST',
        url: 'http://10.0.2.2:8088/getInf.php',
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
      <Header title="Tính điểm trung bình" canGoBack />
      <Block>
        <TextInput
          style={styles.input}
          placeholder="Tên sinh viên"
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Điểm Html"
          onChangeText={text => setHtml(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Điểm Javascript"
          onChangeText={text => setJavaScript(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Điểm Java"
          onChangeText={text => setJava(text)}
        />

        <Button
          containerStyle={{width: width - 32}}
          title="Submit"
          onPress={() => fetchData(formData)}
        />
        <Text center marginTop={20}>
          Tên : {ketQua.name}
        </Text>
        <Text center marginTop={20}>
          Điểm trung bình: {ketQua.score}
        </Text>
      </Block>
    </Block>
  );
};

export default Score;
