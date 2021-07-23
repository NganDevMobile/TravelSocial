import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  image: {
    width: width - 32,
    height: getSize.s(200),
    borderTopLeftRadius: getSize.s(5),
    borderTopRightRadius: getSize.s(5),
  },
  iconMore: {
    width: getSize.s(14),
    height: getSize.s(14),
  },
  iconAction: {
    width: getSize.s(16),
    height: getSize.s(16),
  },
  avt: {
    width: getSize.s(50),
    height: getSize.s(50),
    borderRadius: getSize.s(25),
  },
});
