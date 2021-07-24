import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: isReading => ({
    backgroundColor: isReading ? theme.colors.smoke : theme.colors.white,
    paddingHorizontal: getSize.m(16),
    marginHorizontal: getSize.m(16),
    borderRadius: getSize.m(5),
    marginVertical: getSize.m(6),
  }),
  iconNotification: {
    width: getSize.s(48),
    height: getSize.s(48),
  },
});
