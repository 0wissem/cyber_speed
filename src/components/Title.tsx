import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ITitle {
  label: string;
}

const Title: React.FC<ITitle> = ({label = 'title'}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  label: {
    color: '#FFF',
    fontSize: 16,
    height: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
