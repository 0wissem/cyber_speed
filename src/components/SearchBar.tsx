import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/colors';
import {LOOP, REJECTION} from '../constants/icons';

interface ISearchBar {
  value: string;
  onChangeText: (value: string) => void;
}

const SearchBar: React.FC<ISearchBar> = ({onChangeText, value}) => {
  const [showCancelTextButton, setShowCancelTextButton] = useState(false);
  const onFocus = () => {
    if (value?.length > 0) {
      setShowCancelTextButton(true);
    }
    return;
  };
  const onCancelText = () => {
    onChangeText('');
    setShowCancelTextButton(false);
  };
  return (
    <View style={styles.container}>
      <Image source={LOOP} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        cursorColor={COLORS.GRAY_TEXT}
        placeholder="Search"
        placeholderTextColor={COLORS.GRAY_TEXT}
        onFocus={onFocus}
      />
      {showCancelTextButton && value?.length !== 0 && (
        <TouchableOpacity onPress={onCancelText} style={styles.buttonRejection}>
          <Image source={REJECTION} style={styles.iconRejection} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GRAY_BACKGROUND,
    height: 45,
    marginHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 7,
  },
  icon: {
    height: 20,
    width: 20,
  },
  iconRejection: {
    height: 15,
    width: 15,
  },
  textInput: {
    flexGrow: 1,
    height: 30,
    fontSize: 14,
    paddingStart: 7,
    paddingVertical: 0,
    color: COLORS.GRAY_TEXT,
  },
  buttonRejection: {
    backgroundColor: COLORS.GRAY_BACKGROUND,
    borderRadius: 30,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
