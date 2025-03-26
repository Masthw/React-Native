import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, RootStackParamList } from '../types';

interface StackStepProps {
    children: React.ReactNode
    advance?: keyof RootStackParamList;
}

const StackStep: React.FC<StackStepProps> = ({children, advance}) => {
    const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.mainContainer}>
      <View>{advance && (
        <Button title="Avançar" onPress={() => navigation.navigate(advance)} />
      )}</View>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default StackStep;
