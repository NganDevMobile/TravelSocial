import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
import {icons} from '@assets';
import {getSize} from '@utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const ItemPost = ({index, picture, title, username, content, onPress}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={onPress}>
      <Block key={index} flex radius={5} marginTop={20}>
        <Block row alignCenter space="between">
          <Block row alignCenter>
            <Image
              source={{
                uri: 'https://media.vov.vn/sites/default/files/styles/front_large/public/2020-08/3-blackpink-jisoo-dior-elle-korea-july-2020-issue-1-1.jpg',
              }}
              style={styles.avt}
            />
            <Text size={17} fontType="bold" marginLeft={10}>
              Kim Jisoo
            </Text>
          </Block>

          <Image source={icons.more} style={styles.iconMore} />
        </Block>
        <Block shadow radius={5} marginTop={15} backgroundColor="white">
          <Image
            source={{
              uri: picture,
            }}
            style={styles.image}
          />
          <Block padding={10}>
            <Text size={17} fontType="bold">
              {title}
            </Text>
            <Text size={14} numberOfLines={2}>
              {content}
            </Text>
            <Block row alignCenter marginTop={15}>
              <Image source={icons.heart} style={styles.iconAction} />
              <Image
                source={icons.comment}
                style={{...styles.iconAction, marginLeft: getSize.m(15)}}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemPost;
