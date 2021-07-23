import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  icon: {
    width: getSize.s(20),
    height: getSize.s(20),
  },
  iconNext: {
    width: getSize.s(12),
    height: getSize.s(12),
  },
});
