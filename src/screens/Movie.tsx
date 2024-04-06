import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {tmbdStore} from '../stores/tmbd';
import {getImageFullUri} from '../utils/helpers';
import Poster from '../components/Poster';
import Loader from '../components/Loader';
import Keyword from '../components/Keyword';
import Title from '../components/Title';
import {COLORS} from '../constants/colors';
import Description from '../components/Description';
import Actor from '../components/Actor';
const Movie = ({navigation, route}) => {
  const {retreiveMovieDetails, movie} = tmbdStore;
  const movie_id = route?.params?.id;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      await retreiveMovieDetails(movie_id);
      setLoading(false);
    };
    fetchMovie();
  }, [movie_id]);

  const renderActor = ({item}) => {
    return <Actor uri={item?.uri} />;
  };
  const title = `${movie?.title} (${Number(
    movie?.vote_average?.toFixed?.(1) || 0,
  )})`;
  const ItemSeparatorComponent = () => <View style={{width: 20}} />;
  const ListEmptyComponent = <Text style={styles.text}>No Actors found</Text>;

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Poster imagePath={getImageFullUri(movie?.poster_path)} />
      <View style={styles.subContainer}>
        <View style={styles.keywordsContainer}>
          {movie?.genres?.map?.((item, index) => (
            <Keyword label={item?.name} key={item?.id} />
          ))}
        </View>
        <Title label={title} style={styles.title} />
        <Description label={movie?.overview} />
        <Title label="Actors" style={[styles.title, {marginTop: 20}]} />
        <FlatList
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderActor}
          // API does not return actors.
          data={[]}
          ListEmptyComponent={ListEmptyComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </ScrollView>
  );
};

export default observer(Movie);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    paddingTop: 100,
  },
  keywordsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  subContainer: {
    paddingHorizontal: 13,
  },
  title: {
    marginBottom: 20,
  },
  contentContainerStyle: {paddingBottom: 40},
  text: {
    color: '#FFF',
  },
});
