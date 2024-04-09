import {StyleSheet} from 'react-native';
import React from 'react';
import Title from './Title';
import {COLORS} from '../constants/colors';

interface IListEmptyComponent {
  label: string;
}

const ListEmptyComponent: React.FC<IListEmptyComponent> = ({label}) => {
  return <Title style={styles.text} label={label} />;
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  text: {alignSelf: 'center', marginTop: 20, color: COLORS.RED},
});
