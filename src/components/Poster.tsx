import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {DEFAULT_MOVIE_POSTER} from '../screens/Home';

const Poster = ({imagePath = DEFAULT_MOVIE_POSTER}) => {
  return (
    <ImageBackground source={{uri: imagePath}} style={styles.poster} >
      <LinearGradient
        style={styles.container}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0.9}}
        colors={[COLORS.BLACK, COLORS.BLACK, '#00000000']}
      />
    </ImageBackground>
  )
}

export default Poster;

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  poster: {
    height: 500,
  },
  iconContainer: {
    marginTop: 40,
    marginStart: 20,
    backgroundColor: COLORS.GRAY_BACKGROUND,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
