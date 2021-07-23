import {icons} from '@assets';
import {AnimatedImage, Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemSearch = ({item_id, picture, thumbnail, title}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(routes.NEWS_DETAILS, {item_id})}
      style={styles.container}>
      <Block row alignCenter width="75%">
        <AnimatedImage
          source={picture}
          thumbnail={thumbnail}
          style={styles.imageSearch}
        />
        <Text numberOfLines={2} marginLeft={15}>
          {title}
        </Text>
      </Block>
      <Image source={icons.next} style={styles.iconNext} />
    </Pressable>
  );
};

export default ItemSearch;
