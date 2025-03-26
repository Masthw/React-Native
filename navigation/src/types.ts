import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
  ScreenC: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
