import {StyleSheet} from 'react-native';
import {getSize, width, height} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  iconBack: {
    tintColor: theme.colors.lightGreen,
    height: getSize.s(18),
    width: getSize.s(18),
  },
});
