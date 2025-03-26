import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';
import StackStep from '../components/StackStep';
import {RootStackParamList} from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="ScreenA"
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="ScreenA" options={{title: 'Informações Iniciais'}}>
        {() => (
          <StackStep advance="ScreenB">
            <ScreenA />
          </StackStep>
        )}
      </Stack.Screen>
      <Stack.Screen name="ScreenB">
        {() => (
          <StackStep advance="ScreenC">
            <ScreenB />
          </StackStep>
        )}
      </Stack.Screen>
      <Stack.Screen name="ScreenC" component={ScreenC} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
