import {Block, Header} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ItemPost from '@components/Common/ItemList/ItemPost';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PersonalPost = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const user = 'aaa';

  const _renderItemPost = item => <ItemPost />;
  return (
    <Block flex paddingHorizontal={16}>
      <Header title="Bài viết của tôi" upload canGoBack />
      <Block flex marginBottom={10}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={_renderItemPost}
          keyExtractor={item => item.group_id}
        />
      </Block>
    </Block>
  );
};

export default PersonalPost;
