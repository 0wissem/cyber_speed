import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ARROW_BACK} from '../constants/icons';
import {COLORS} from '../constants/colors';
interface IHeaderLeftBackToPreviousScreen {
  navigation: any;
}

const HeaderLeftBackToPreviousScreen: React.FC<
  IHeaderLeftBackToPreviousScreen
> = ({navigation}) => {
  return (
    <TouchableOpacity
      hitSlop={{top: 20, right: 20, left: 20, bottom: 20}}
      onPress={() => {
        try {
          return navigation?.pop?.();
        } catch (error) {}
      }} // Go back on press
      style={styles.backButton}>
      <Image source={ARROW_BACK} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default HeaderLeftBackToPreviousScreen;

const styles = StyleSheet.create({
  backButton: {
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
