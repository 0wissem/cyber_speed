import {Image, Platform, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

interface ISearchBar {
  value: string;
  onChangeText: (value: string) => void;
}

const SearchBar: React.FC<ISearchBar> = ({onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/loop.png')} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        cursorColor={COLORS.GRAY_TEXT}
        placeholder="Search"
        placeholderTextColor={COLORS.GRAY_TEXT}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_BACKGROUND,
    height: 45,
    marginHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 7,
  },
  icon: {
    height: 20,
    width: 20,
  },
  textInput: {
    flexGrow: 1,
    height: 30,
    fontSize: 14,
    paddingStart: 7,
    paddingVertical: 0,
    color: COLORS.GRAY_TEXT,
  },
});
