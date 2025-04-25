import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

export type TabParamList = {
  Feed: undefined;
  AddPhoto: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  HomeTabs: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = ({
  route,
}: {
  route: {name: keyof TabParamList};
}): BottomTabNavigationOptions => {
  let iconName: string = 'circle';

  if (route.name === 'Feed') {
    iconName = 'home';
  } else if (route.name === 'AddPhoto') {
    iconName = 'camera';
  } else if (route.name === 'Profile') {
    iconName = 'user';
  }
  return {
    tabBarIcon: ({color, size}: {color: string; size: number}) => (
      <Icon name={iconName} size={size} color={color} />
    ),
    tabBarShowLabel: false,
    tabBarInactiveTintColor: '#888',
  };
};

const HomeTabs = () => (
  <Tab.Navigator initialRouteName="Feed" screenOptions={screenOptions}>
    <Tab.Screen name="Feed" component={Feed} options={{headerShown: false}} />
    <Tab.Screen
      name="AddPhoto"
      component={AddPhoto}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: true, title: 'Registrar'}}
        />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
