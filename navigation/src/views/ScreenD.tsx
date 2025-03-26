import React from 'react';
import CentralText from '../components/CentralText';
import {Button, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { DrawerParamList } from '../types';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type ScreenDNavigationProp = DrawerNavigationProp<DrawerParamList, 'ScreenD'>;

const ScreenD: React.FC = () => {
    const navigation = useNavigation<ScreenDNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Button title="Abrir" onPress={() => navigation.openDrawer()} />
        <Button title="Fechar" onPress={() => navigation.closeDrawer()} />
      </View>
      <View style={styles.container}>
        <CentralText backgroundColor="#33FA72" textColor="#000">
          Screen D
        </CentralText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default ScreenD;
