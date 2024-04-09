import {StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
export interface IActor {
  uri: string;
}
const Actor: React.FC<IActor> = ({uri = ''}) => {
  return <FastImage source={{uri}} style={styles.container} />;
};

export default Actor;

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 100,
    borderRadius: 20,
  },
});
