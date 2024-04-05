import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
interface IKeyword {
  label: string;
}
const Keyword: React.FC<IKeyword> = ({label = 'keyword'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Keyword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_BACKGROUND,
    marginEnd: 14,
    padding: 8,
    borderRadius: 10,
  },
  label: {
    color: '#FFF',
    fontSize: 12,
    height: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
