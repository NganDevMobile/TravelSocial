import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {icons} from '@assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '@theme';
import styles from './styles';
import {routes} from '@navigation/routes';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderHome = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Block>
      <Block
        row
        alignCenter
        paddingTop={top + 10}
        paddingHorizontal={16}
        paddingVertical={16}
        space="between"
        backgroundColor="background">
        <Text flex size={24} fontType="bold" color={theme.colors.darkGreen}>
          Traveling to ?
        </Text>
        <Pressable onPress={() => navigation.navigate(routes.SEARCH_SCREEN)}>
          <Image
            source={icons.search}
            style={styles.iconSearch}
            resizeMode="contain"
          />
        </Pressable>
      </Block>
    </Block>
  );
};

const HeaderCommon = ({title, canGoBack, upload}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Block>
      <Block row alignCenter paddingTop={top + 10} paddingVertical={16}>
        {canGoBack && (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              style={styles.iconBack}
              resizeMode="contain"
            />
          </Pressable>
        )}
        {title && (
          <Text
            flex
            center
            size={17}
            fontType="bold"
            color={theme.colors.darkGreen}>
            {title}
          </Text>
        )}
        {upload && (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={icons.upload}
              style={styles.iconBack}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </Block>
    </Block>
  );
};
export default Header;
