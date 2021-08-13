import {Block, Header} from '@components';
import {useNavigation, useIsFocused} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {Image, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ItemPost from '@components/Common/ItemList/ItemPost';
import {routes} from './../../../../../navigation/routes';

const PersonalPost = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const user = 'aaa';
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetch('http://10.0.2.2:8088/views/post_get_all.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => setData(json));
  });

  const _renderItemPost = ({item, index}) => (
    <ItemPost
      onPress={() => navigation.navigate(routes.UPDATE_POST, {item: item})}
      index={index}
      id={item.id}
      title={item.title}
      content={item.content}
      picture={item.picture}
      user_id={item.user_id}
    />
  );

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
