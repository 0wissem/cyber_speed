import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constants/colors';

interface ICard {
  title: string;
  imagePath: string;
  onPress: () => void;
  id: string | number | null;
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
      <ImageBackground
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
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;

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
