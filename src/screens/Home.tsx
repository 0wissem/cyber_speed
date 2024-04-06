import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import SearchBar from '../components/SearchBar';
import {COLORS} from '../constants/colors';
import Card from '../components/Card';
import {SafeAreaView} from 'react-native-safe-area-context';
import {tmbdStore} from '../stores/tmbd';
import {observer} from 'mobx-react-lite';
import {getImageFullUri} from '../utils/helpers';
import Loader from '../components/Loader';
import {STRINGS} from '../constants/strings';
import Title from '../components/Title';
import {useDebounce} from '../hooks/useDebounce';

interface IHome {
  navigation: any;
}
export const DEFAULT_MOVIE_POSTER =
  'https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_movie-poster-template-bf66c91406dcc58797e8135a5d201178.jpg?ts%20=%201699441096';
const ItemSeparatorComponent = () => <View style={{height: 20}} />;
const Home: React.FC<IHome> = ({navigation}) => {
  const {searchMovies, fetchRandomMovies, movies} = tmbdStore;
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const listRef = useRef<FlatList<any>>(null);
  const searchQuery = useDebounce(searchText, 1000);

  useEffect(() => {
    const fetchMovies = async () => {
      listRef?.current?.scrollToOffset({animated: true, offset: 0});
      setLoading(true);
      if (searchText) {
        await searchMovies(searchText);
        setLoading(false);
        return;
      }
      await fetchRandomMovies();
      setLoading(false);
    };
    fetchMovies();
  }, [searchQuery]);

  const onNavigateToMovieDetails = useCallback((id: number | null) => {
    navigation.push('Movie', {id});
  }, []);

  const renderMovie = useCallback(({item}) => {
    return (
      <Card
        imagePath={getImageFullUri(item?.poster_path)}
        title={item?.title}
        onPress={onNavigateToMovieDetails}
        id={item?.id}
      />
    );
  }, []);
  const ListEmptyComponent = () => {
    return (
      <Title
        style={styles.noFilmsText}
        label={`${STRINGS.FILMS_NOT_FOUND} ${searchText}`}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
      {loading && <Loader />}
      <FlatList
        ref={listRef}
        data={movies}
        renderItem={renderMovie}
        style={styles.list}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={item => item?.id}
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
  noFilmsText: {alignSelf: 'center', marginTop: 20, color: COLORS.RED},
});
