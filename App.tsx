/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import Movie from './src/screens/Movie';
import {COLORS} from './src/constants/colors';
import HomeHeader from './src/components/HomeHeader';
const HeaderLeftBackToPreviousScreen = navigation => {
  return (
    <TouchableOpacity
      hitSlop={{top: 20, right: 20, left: 20, bottom: 20}}
      onPress={() => {
        try {
          return navigation.pop();
        } catch (error) {}
      }} // Go back on press
      style={styles.backButton}>
      <Image
        source={require('./src/assets/icons/arrow_back.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: HomeHeader,
          }}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={({navigation}) => ({
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => HeaderLeftBackToPreviousScreen(navigation),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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
