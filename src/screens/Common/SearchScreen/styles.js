import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerInputStyle: {
    width: '100%',
    marginBottom: getSize.m(10),
  },
  inputStyle: {
    paddingHorizontal: getSize.m(16),
    // backgroundColor: theme.colors.smoke,
    borderWidth: 1,
  },
  iconSeach: {
    height: getSize.s(15),
    width: getSize.s(15),
    marginRight: getSize.m(10),
    tintColor: theme.colors.gray,
  },
});
