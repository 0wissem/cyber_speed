import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import FastImage from 'react-native-fast-image';
import {AVATAR} from '../constants/images';
import {STRINGS} from './strings';

interface IHomeHeader {
  label?: string;
  description?: string;
  avatar?: string;
}
const HomeHeader: React.FC<IHomeHeader> = ({
  label = STRINGS.HELLO,
  description = STRINGS.DESCRIPTION_HEADER,
  avatar = AVATAR,
}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.subContainer}>
      <FastImage source={avatar} style={styles.avatar} />
      <View style={styles.texts}>
        <Text style={styles.name}>{label}</Text>
        <Text style={styles.desciption}>{description}</Text>
      </View>
    </View>
  </SafeAreaView>
);

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 50,
    paddingHorizontal: 10,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 15,
  },
  texts: {
    marginStart: 10,
  },
  name: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  desciption: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
});
