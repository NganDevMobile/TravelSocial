import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    marginTop: getSize.m(10),
  },
  iconNext: {
    tintColor: theme.colors.blue,
    marginRight: getSize.s(10),
    width: getSize.s(16),
    height: getSize.s(16),
  },
  imageSearch: {
    width: getSize.s(50),
    height: getSize.s(50),
    borderRadius: getSize.s(5),
  },
});
