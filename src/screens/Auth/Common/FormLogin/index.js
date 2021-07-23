import {Block, Text, TextInput} from '@components';
import React from 'react';
import {theme} from '@theme';

const FormLogin = ({label, placeholder, isSecure}) => {
  return (
    <Block marginTop={15}>
      <TextInput
        inputStyle={{color: theme.colors.black}}
        labelStyle={{color: theme.colors.gray}}
        label={label}
        inputContainer={{backgroundColor: 'background'}}
        placeholder={placeholder}
        isSecure={isSecure}
      />
    </Block>
  );
};

export default FormLogin;
