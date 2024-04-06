import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Poster from '../components/Poster';
import {COLORS} from '../constants/colors';
import Keyword from '../components/Keyword';
import Title from '../components/Title';
import Description from '../components/Description';
import Actor from '../components/Actor';
const description =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
const Movie = () => {
  const keywords = ['test1', 'test1', 'test2'];
  const renderActor = ({item}) => {
    return <Actor uri={item?.uri}/>;
  };
  const ItemSeparatorComponent = () => <View style={{width:20}} />
  return (
    <ScrollView style={styles.container} bounces={false}>
      <Poster />
      <View style={styles.subContainer}>
        <View style={styles.keywordsContainer}>
          {keywords.map((label, index) => (
            <Keyword label={label} key={label + index} />
          ))}
        </View>
        <Title label="test film name" style={styles.title} />
        <Description label={description} />
        <Title label="Actors" style={styles.title} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderActor}
          data={['','']}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>
    </ScrollView>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
  },
  keywordsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  subContainer: {
    paddingHorizontal: 13,
  },
  title: {
    marginBottom: 20,
  },
});
