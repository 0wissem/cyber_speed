import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constants/colors';
import FastImage from 'react-native-fast-image';

interface ICard {
  title: string;
  imagePath?: string;
  onPress?: (id: number | null) => void;
  id?: number | null;
}
const Card: React.FC<ICard> = ({
  title = 'unavailable',
  imagePath = '',
  onPress = () => {},
  id = null,
}) => {
  const _onPress = () => {
    onPress(id);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={_onPress}>
      <FastImage
        source={{uri: imagePath}}
        resizeMode="cover"
        style={styles.image}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={[COLORS.BLACK, COLORS.BLACK, '#00000000']}>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {title}
            </Text>
          </View>
        </LinearGradient>
      </FastImage>
    </TouchableOpacity>
  );
};
const areEqual = (prevProps, nextProps) => {
  const areequal = JSON.stringify(prevProps) === JSON.stringify(nextProps);
  return areequal;
};

export default memo(Card, areEqual);

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 20,
    height: 400,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    justifyContent: 'center',
    height: 80,
    paddingStart: 23,
    paddingTop: 40,
  },
  text: {
    color: '#FFF',
    textTransform: 'capitalize',
    fontSize: 16,
  },
});
