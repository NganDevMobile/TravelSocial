import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  resetStyles: {
    flex: 1,
    padding: 0,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  defaultStyles: {
    fontFamily: theme.fonts.fontFamily.default,
    minHeight: getSize.m(38),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1 / 2,
    borderColor: theme.colors.blue,
    borderRadius: getSize.s(5),
    height: getSize.s(45),
  },
  leftIcon: {
    position: 'absolute',
    left: getSize.m(12),
    height: getSize.s(20),
    width: getSize.s(20),
  },
  rightIcon: {
    position: 'absolute',
    right: getSize.m(12),
  },
});
