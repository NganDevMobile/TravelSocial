import {StyleSheet} from 'react-native';
import {getSize, width, height} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  iconBack: {
    tintColor: theme.colors.gray,
    height: getSize.s(18),
    width: getSize.s(18),
  },
  titleStyle: {
    fontSize: getSize.s(17),
    fontWeight: 'bold',
  },
  containerStyle: {
    marginTop: getSize.m(30),
    width: width - 32,
  },
});
