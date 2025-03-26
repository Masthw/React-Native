import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp, RootStackParamList} from '../types';

interface StackStepProps {
  children: React.ReactNode;
  advance?: keyof RootStackParamList;
  goBack?: boolean;
}

const StackStep: React.FC<StackStepProps> = ({children, advance, goBack}) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonsView}>
        {goBack && (
          <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
          />
        )}
        {advance && (
          <Button
            title="Avançar"
            onPress={() => navigation.navigate(advance)}
          />
        )}
      </View>
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
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default StackStep;
