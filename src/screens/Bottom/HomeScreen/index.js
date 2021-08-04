import {Block, Header} from '@components';
import ItemPost from '@components/Common/ItemList/ItemPost';
import React from 'react';
import {FlatList} from 'react-native';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const HomeScreen = () => {
  const _renderItemPost = item => (
    <ItemPost
    // title={item.title}
    // picture={item.picture}
    // group_id={item.group_id}
    />
  );
  return (
    <Block flex backgroundColor="background">
      <Header type="Home" />
      <Block flex paddingHorizontal={16}>
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

export default HomeScreen;
