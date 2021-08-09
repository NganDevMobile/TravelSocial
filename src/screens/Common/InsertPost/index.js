import {icons, lotties} from '@assets';
import {Block, Header, TextInput} from '@components';
import ItemSearch from '@components/Common/ItemList/ItemSearch';
import {theme} from '@theme';
import {debounce} from 'lodash';
import React, {useState} from 'react';
import {FlatList, Image} from 'react-native';

import Empty from '../Empty/index';
import styles from './styles';

const data = [];

const InsertPost = ({route}) => {
  return (
    <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
      <Header canGoBack title="Thêm bài viết" />
      <Block>
        <TextInput label="Tiêu đề" />
        <TextInput label="Nội dung" />
      </Block>
    </Block>
  );
};

export default InsertPost;
