import {Block, Header} from '@components';
import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import ItemGroup from '@components/Common/ItemList/ItemGroup';
import ItemPost from '@components/Common/ItemList/ItemPost';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const HomeScreen = () => {
  const _renderItemGroup = item => (
    <ItemGroup
      title={item.title}
      picture={item.picture}
      group_id={item.group_id}
    />
  );
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
      <ScrollView>
        <Block marginTop={10}>
          <FlatList
            horizontal
            data={data}
            renderItem={_renderItemGroup}
            keyExtractor={item => item.group_id}
            showsHorizontalScrollIndicator={false}
          />
        </Block>
        <Block flex paddingHorizontal={16}>
          <FlatList
            data={data}
            renderItem={_renderItemPost}
            keyExtractor={item => item.group_id}
          />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default HomeScreen;
