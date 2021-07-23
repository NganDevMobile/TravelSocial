import {Block, Header, Text} from '@components';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

const Dssv = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    fetchData();
  });

  const fetchData = async data => {
    try {
      const resp = await axios({
        method: 'POST',
        url: 'http://10.0.2.2:8088/GET_Array.php',
        data: data,
      });
      var obj = resp.data;
      console.log('success');
      console.log(obj);
      setData(obj);
    } catch (err) {
      console.log('error');
    }
  };

  const _renderItem = item => (
    <Block marginTop={10}>
      <Text size={17} fontType="bold">
        Name: {item.item.name}
      </Text>
      <Text>Phone: {item.item.phone}</Text>
      <Text>Email: {item.item.email}</Text>
    </Block>
  );

  return (
    <Block flex paddingHorizontal={16}>
      <Header canGoBack title="Danh sách" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
      />
    </Block>
  );
};

export default Dssv;
