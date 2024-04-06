import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constants/colors';
import {STRINGS} from '../constants/strings';

interface IDescription {
  label: string;
}
const Description: React.FC<IDescription> = ({label = ''}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescriptionView = useCallback(() => {
    setShowFullDescription(p => !p);
  }, []);

  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={[
        `${COLORS.RED}11`,
        `${COLORS.RED}44`,
        `${COLORS.RED}11`,
        '#00000022',
      ]}>
      <Text style={styles.label} numberOfLines={showFullDescription ? null : 4}>
        {label}
      </Text>
      {label?.length > 250 && (
        <TouchableOpacity
          onPress={toggleDescriptionView}
          hitSlop={{top: 40, right: 20, left: 20}}>
          {showFullDescription ? (
            <Text style={styles.moreOrLess}>{STRINGS.SHOW_LESS}</Text>
          ) : (
            <Text style={styles.moreOrLess}>{STRINGS.SHOW_MORE}</Text>
          )}
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default Description;

const styles = StyleSheet.create({
  label: {
    color: '#FFF',
  },
  moreOrLess: {
    color: COLORS.RED,
    textTransform: 'capitalize',
    alignSelf: 'center',
    fontSize: 12,
  },
});
