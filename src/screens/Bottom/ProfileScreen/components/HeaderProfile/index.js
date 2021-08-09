import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const HeaderProfile = ({icon, content}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routes.PERSONAL_POST)}>
      <Block row alignCenter paddingTop={top + 10}>
        <Image
          source={{
            uri: 'https://media.vov.vn/sites/default/files/styles/front_large/public/2020-08/3-blackpink-jisoo-dior-elle-korea-july-2020-issue-1-1.jpg',
          }}
          style={styles.avt}
        />
        <Block marginLeft={10}>
          <Text size={17} fontType="bold">
            Kim Jisoo
          </Text>
          <Text>nganlth.devmobile@gmail.com</Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default HeaderProfile;
