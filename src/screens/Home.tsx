import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import { COLORS } from '../constants/colors';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    paddingTop: 150,
  },
});