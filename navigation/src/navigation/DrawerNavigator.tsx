import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';
import ScreenD from '../views/ScreenD';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="ScreenD">
      <Drawer.Screen name="ScreenA" component={ScreenA} />
      <Drawer.Screen name="ScreenB" component={ScreenB} />
      <Drawer.Screen name="ScreenC" component={ScreenC} />
      <Drawer.Screen name="ScreenD" component={ScreenD} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
