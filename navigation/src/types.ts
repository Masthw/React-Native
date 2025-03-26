import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';


export type RootStackParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
  ScreenC: undefined;
  ScreenD: undefined;
};

export type DrawerParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
  ScreenC: undefined;
  ScreenD: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
export type DrawerNavigation = DrawerNavigationProp<DrawerParamList>;
