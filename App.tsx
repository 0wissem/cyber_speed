/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import Movie from './src/screens/Movie';
import HomeHeader from './src/components/HomeHeader';
import tmbdStore from 'tmbd_module_wk';
import {ACCESS_TOKEN} from './src/constants/config';
import {observer} from 'mobx-react-lite';
import HeaderLeftBackToPreviousScreen from './src/components/HeaderLeftBackToPreviousScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  const {accessToken} = tmbdStore;
  useEffect(() => {
    tmbdStore.setAccessToken(ACCESS_TOKEN);
  }, []);
  if (accessToken) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => <HomeHeader />,
            }}
          />
          <Stack.Screen
            name="Movie"
            component={Movie}
            options={({navigation}) => ({
              headerTransparent: true,
              headerTitle: '',
              headerLeft: () => (
                <HeaderLeftBackToPreviousScreen navigation={navigation} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default observer(App);
