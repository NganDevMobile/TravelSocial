import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  iconSearch: {
    tintColor: theme.colors.lightGreen,
    height: getSize.s(18),
    width: getSize.s(18),
  },
  iconBack: {
    tintColor: theme.colors.lightGreen,
    height: getSize.s(18),
    width: getSize.s(18),
  },
});
