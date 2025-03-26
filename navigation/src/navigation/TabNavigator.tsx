import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarLabelStyle: {fontSize: 20},
        tabBarIcon: () => null,
      }}>
      <Tab.Screen name="ScreenA" component={ScreenA} />
      <Tab.Screen name="ScreenB" component={ScreenB} />
      <Tab.Screen name="ScreenC" component={ScreenC} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
