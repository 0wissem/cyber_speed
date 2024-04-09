import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Movie: {id: number};
};
export type MovieScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Movie'
>;
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
