import {FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import SearchBar from '../components/SearchBar';
import {COLORS} from '../constants/colors';
import Card from '../components/Card';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IHome {
  navigation: any;
}
export const DEFAULT_MOVIE_POSTER =
  'https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_movie-poster-template-bf66c91406dcc58797e8135a5d201178.jpg?ts%20=%201699441096';
const ItemSeparatorComponent = () => <View style={{height: 20}} />;
const Home: React.FC<IHome> = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const onNavigateToMovieDetails = useCallback((id: string | number | null) => {
    navigation.push('Movie', {id});
  }, []);
  const renderMovie = ({item}) => {
    return (
      <Card
        imagePath={DEFAULT_MOVIE_POSTER}
        title="test"
        onPress={onNavigateToMovieDetails}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <FlatList
        data={['', '', '', '', '', '', '', '']}
        renderItem={renderMovie}
        style={styles.list}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    paddingTop: 20,
  },
  list: {
    marginTop: 32,
  },
});
