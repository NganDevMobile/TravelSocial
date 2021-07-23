import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {icons} from '@assets';
import {getSize} from '@utils/responsive';

const ItemPost = ({
  picture,
  title,
  group_id,
  username,
  date_upload,
  content,
}) => {
  return (
    <Block flex radius={5} marginTop={20}>
      <Block row alignCenter space="between">
        <Block row alignCenter>
          <Image
            source={{
              uri: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/150472038_1049544385539282_5292912049991540628_n.jpg?_nc_cat=102&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BpVzwAQW2IcAX__sWDg&_nc_ht=scontent-sin6-2.xx&oh=7eeca5e5b5e33f247fc4f6acce9a0dd0&oe=60FEDA1B',
            }}
            style={styles.avt}
          />
          <Text size={17} fontType="bold" marginLeft={10}>
            Hiếu Ngân
          </Text>
        </Block>
        <Image source={icons.more} style={styles.iconMore} />
      </Block>
      <Block shadow radius={5} marginTop={15} backgroundColor="white">
        <Image
          source={{
            uri: 'https://owa.bestprice.vn/images/tours/large/tham-quan-vinh-ha-long-5e563331d21df-848x477.jpg',
          }}
          style={styles.image}
        />
        <Block padding={10}>
          <Text size={17} fontType="bold">
            Vịnh Hạ Long
          </Text>
          <Text size={14} numberOfLines={2}>
            Vịnh Hạ Long là một vịnh nhỏ thuộc phần bờ tây vịnh Bắc Bộ tại khu
            vực biển Đông Bắc Việt Nam, bao gồm vùng biển đảo của thành phố Hạ
            Long thuộc tỉnh Quảng Ninh.
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
  );
};

export default ItemPost;
