import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ITitle {
  label: string;
  style: object; //null is an object
}

const Title: React.FC<ITitle> = ({label = 'title', style = null}) => {
  return (
    <View>
      <Text style={[styles.label, style]}>{label}</Text>
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
