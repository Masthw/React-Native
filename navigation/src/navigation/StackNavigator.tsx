import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="ScreenA"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ScreenA"
        options={{title: 'Informações Iniciais'}}
        component={ScreenA}
      />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
