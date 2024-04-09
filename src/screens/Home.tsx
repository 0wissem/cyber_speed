import {Alert, FlatList, Platform, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import SearchBar from '../components/SearchBar';
import {COLORS} from '../constants/colors';
import Card from '../components/Card';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {tmbdStore} from '../stores/tmbd';
import {observer} from 'mobx-react-lite';
import {getImageFullUri, handleErrorMessage} from '../utils/helpers';
import Loader from '../components/Loader';
import {STRINGS} from '../constants/strings';
import Title from '../components/Title';
import {tmbdStore} from 'tmbd_module_wk';
import {useDebounce} from '../hooks/useDebounce';
import {Movie} from '../types/types';
import MessageComponent from '../components/ListEmptyComponent';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';
import {HomeScreenProps} from '../types/navigator';

const ItemSeparator = () => <ItemSeparatorComponent height={20} />;
const Home = ({navigation}: HomeScreenProps) => {
  const {searchMovies, fetchRandomMovies, movies: _movies} = tmbdStore;
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const listRef = useRef<FlatList<any>>(null);
  const searchQuery = useDebounce(searchText, 1000);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        listRef?.current?.scrollToOffset({animated: true, offset: 0});
        setLoading(true);
        if (searchText) {
          await searchMovies(searchText);
          setLoading(false);
          return;
        }
        await fetchRandomMovies();
        setLoading(false);
      } catch (e) {
        Alert.alert('', handleErrorMessage(e));
      }
    };
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const onNavigateToMovieDetails = useCallback((id: number | null) => {
    try {
      if (id) {
        navigation.push('Movie', {id});
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const renderMovie = useCallback(({item}: {item: Movie}) => {
    return (
      <Card
        imagePath={getImageFullUri(item.poster_path as string)}
        title={item.title}
        onPress={onNavigateToMovieDetails}
        id={item.id}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ListEmptyComponent = (
    <MessageComponent label={`${STRINGS.FILMS_NOT_FOUND} ${searchText}`} />
  );
  const movies = _movies?.results || [];
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
      {loading && <Loader />}
      <FlatList
        ref={listRef}
        data={movies}
        renderItem={renderMovie}
        style={styles.list}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    paddingTop: Platform.OS === 'android' ? 60 : 20,
  },
  list: {
    marginTop: 32,
  },
});
