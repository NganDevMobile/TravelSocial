import {Block, Text, Button, Header} from '@components';
import React from 'react';
import ItemInfo from './components/ItemInfo';
import HeaderProfile from './components/HeaderProfile';
import {Image} from 'react-native';
import {icons} from '@assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '@theme';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const dataInfo = [
  {
    icon: icons.details,
    content: 'Xem thông tin chi tiết',
  },
  {
    icon: icons.edit,
    content: 'Chỉnh sửa thông tin cá nhân',
  },
  {
    icon: icons.password,
    content: 'Đổi mật khẩu',
  },
];

const dataOptions = [
  {
    icon: icons.contact,
    content: 'Liên hệ',
  },
  {
    icon: icons.support,
    content: 'Hỗ trợ',
  },
  {
    icon: icons.settings,
    content: 'Cài đặt',
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const user = 'aaa';
  const _renderItem = item => (
    <ItemInfo icon={item.icon} content={item.content} />
  );
  return (
    <Block paddingHorizontal={20}>
      {user ? (
        <HeaderProfile />
      ) : (
        <Block>
          <Header title="Quản lý thông tin cá nhân" />
          <Button
            onPress={() => navigation.navigate(routes.OPTION_SCREEN)}
            titleStyle={styles.titleStyle}
            title="Đăng nhập/ Đăng ký để tiếp tục"
          />
        </Block>
      )}

      <Block marginTop={15}>
        <Text size={17} marginBottom={15} fontType="bold">
          Quản lý thông tin
        </Text>
        {dataInfo.map(_renderItem)}
      </Block>
      <Block marginVertical={15}>
        <Text size={17} marginBottom={15} fontType="bold">
          Lựa chọn khác
        </Text>
        {dataOptions.map(_renderItem)}
      </Block>
      {user ? (
        <Button titleStyle={styles.titleStyle} title="Đăng xuất tài khoản" />
      ) : null}
    </Block>
  );
};

export default ProfileScreen;
