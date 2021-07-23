import {StyleSheet} from 'react-native';
import {getSize, width, height} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  input: {
    marginTop: 10,
    borderColor: theme.colors.lightGray,
    borderWidth: 1 / 2,
    borderRadius: 5,
    paddingLeft: 20,
  },
});
