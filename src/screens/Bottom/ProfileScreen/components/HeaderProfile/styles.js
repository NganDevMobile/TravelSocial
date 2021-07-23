import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  avt: {
    width: getSize.s(80),
    height: getSize.s(80),
    borderRadius: getSize.s(40),
  },
  icon: {
    marginLeft: getSize.m(30),
    width: getSize.s(14),
    height: getSize.s(14),
  },
});
