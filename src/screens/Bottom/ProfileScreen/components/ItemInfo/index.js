import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
import {icons} from '@assets';
import {theme} from '@theme';
import {width} from '@utils/responsive';

const ItemInfo = ({icon, content, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Block row alignCenter marginVertical={15} space="between">
        <Block row alignCenter>
          <Image source={icon} style={styles.icon} />
          <Text marginLeft={15}>{content}</Text>
        </Block>
        <Image source={icons.next} style={styles.iconNext} />
      </Block>
    </Pressable>
  );
};

export default ItemInfo;
