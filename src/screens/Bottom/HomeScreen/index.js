import {Block, Header} from '@components';
import ItemPost from '@components/Common/ItemList/ItemPost';
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
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
  }, [isFocused]);

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
