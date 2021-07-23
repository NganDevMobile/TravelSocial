import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemGroup = ({picture, title, group_id}) => {
  return (
    <Block marginLeft={16}>
      <Image
        source={{
          uri: 'https://owa.bestprice.vn/images/tours/large/tham-quan-vinh-ha-long-5e563331d21df-848x477.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Việt Nam</Text>
    </Block>
  );
};

export default ItemGroup;
