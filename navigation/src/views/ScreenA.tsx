import React from 'react';
import CentralText from '../components/CentralText';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import { NavigationProp } from '../types';

const ScreenA: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <>
      <CentralText backgroundColor="#e53935">Screen A</CentralText>
      <Button
        title="Ir para Screen B"
        onPress={() => navigation.navigate('ScreenB')}
      />
    </>
  );
};

export default ScreenA;
