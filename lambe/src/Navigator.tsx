import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';
import {NavigationContainer} from '@react-navigation/native';

type TabParamList = {
  Feed: undefined;
  AddPhoto: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

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

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed" screenOptions={screenOptions}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="AddPhoto"
          component={Feed}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Feed}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
