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

const SearchScreen = ({route}) => {
  const {hotkey} = route.params || '';
  const [keyword, setKeyword] = useState('');
  // const data = useSelector(state => state.search.data);

  // useEffect(() => {
  //   setKeyword(hotkey);
  // }, [hotkey]);

  // useEffect(() => {
  //   if (keyword) {
  //     dispatch({
  //       type: actions.GET_SEARCH_SCREEN,
  //       params: {
  //         keyword,
  //       },
  //     });
  //   } else {
  //     dispatch({type: _onUnmount(actions.GET_SEARCH_SCREEN)});
  //   }

  //   return () => {
  //     dispatch({type: _onUnmount(actions.GET_SEARCH_SCREEN)});
  //   };
  // }, [dispatch, keyword]);

  const _renderItem = ({item}) => (
    <ItemSearch
      item_id={item.item_id}
      picture={item.picture}
      thumbnail={item.thumbnail}
      title={item.title}
    />
  );

  return (
    <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
      <Header canGoBack title="Tìm kiếm bài viết" />
      <Block flex>
        <TextInput
          placeholder="Tìm kiếm bài viết"
          inputStyle={styles.inputStyle}
          containerInputStyle={styles.containerInputStyle}
          onChangeText={debounce(text => setKeyword(text), 500)}
          rightIcon={() => (
            <Image style={styles.iconSeach} source={icons.search} />
          )}
        />
        {data?.length ? (
          <FlatList
            data={data}
            keyExtractor={item => item.item_id}
            renderItem={_renderItem}
          />
        ) : (
          <Empty lottie={lotties.emptySearch} />
        )}
      </Block>
    </Block>
  );
};

export default SearchScreen;
