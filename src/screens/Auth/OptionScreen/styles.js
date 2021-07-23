import {StyleSheet} from 'react-native';
import {getSize, width, height} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  logo: {
    width: width - 32,
    height: getSize.s(200),
  },
  titleStyle: {
    fontSize: getSize.s(17),
    fontWeight: 'bold',
  },
  containerStyle: {
    marginTop: getSize.m(30),
    width: width - 64,
  },
  signup: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 64,
    backgroundColor: theme.colors.white,
    height: getSize.m(60),
    borderRadius: getSize.m(5),
  },
});
