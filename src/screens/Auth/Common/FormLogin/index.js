import {Block, Text, TextInput} from '@components';
import React from 'react';
import {theme} from '@theme';

const FormLogin = ({label, placeholder, isSecure, onChangeText}) => {
  return (
    <Block marginTop={15}>
      <TextInput
        inputStyle={{color: theme.colors.black}}
        labelStyle={{color: theme.colors.black}}
        label={label}
        inputContainer={{backgroundColor: 'background'}}
        placeholder={placeholder}
        isSecure={isSecure}
        onChangeText={onChangeText}
      />
    </Block>
  );
};

export default FormLogin;
