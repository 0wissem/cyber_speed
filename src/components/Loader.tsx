import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';

const Loader = () => {
  return (
    <ActivityIndicator color={COLORS.RED} style={styles.activityIndicator} />
  );
};

export default Loader;

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 50,
  },
});
