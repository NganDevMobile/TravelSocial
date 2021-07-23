import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  image: {
    width: (width - 32) / 2.5,
    height: getSize.s(200),
    borderRadius: getSize.s(5),
  },
  title: {
    marginLeft: 10,
    marginTop: 180,
    position: 'absolute',
    fontSize: getSize.m(17),
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});
