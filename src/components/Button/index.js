/* eslint-disable react-native/no-inline-styles */
import {Text} from '@components';
import Block from '@components/Block';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import styles from './styles';

const Button = ({
  onPress,
  title,
  titleStyle,
  containerStyle,
  disabled,
  leftIcon,
  rightIcon,
}) => {
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <Block
        style={{
          ...styles.container,
          backgroundColor: theme.colors.lightGreen,
          opacity: disabled ? 0.7 : 1,
          ...containerStyle,
        }}>
        {disabled ? (
          <UIActivityIndicator size={getSize.s(20)} color="white" />
        ) : (
          <Block flex row alignCenter justifyCenter space="between">
            {leftIcon && (
              <Image
                resizeMode="contain"
                source={leftIcon}
                style={styles.leftIcon}
              />
            )}
            <Text
              flex
              center
              fontType="semibold"
              color={theme.colors.white}
              style={titleStyle}>
              {title}
            </Text>
            {rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
          </Block>
        )}
      </Block>
    </Pressable>
  );
};

export default Button;
