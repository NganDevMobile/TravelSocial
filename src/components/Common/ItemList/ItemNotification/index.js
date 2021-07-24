import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
import {icons} from '@assets';
import {theme} from '@theme';

const ItemNotification = ({
  item_id,
  title,
  content,
  date_create,
  picture,
  isReading,
  typeOption,
}) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.btn(isReading)}>
      <Block flex marginTop={10}>
        <Block row alignCenter marginBottom={10}>
          <Image source={icons.noti} style={styles.iconNotification} />
          <Block flex marginLeft={10}>
            <Text size={14} fontType="bold" numberOfLines={1} marginRight={10}>
              Tiêu đề thông báo
            </Text>
            <Text flex size={14} numberOfLines={1} fontType="light">
              Thông báo có nội dung
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemNotification;
