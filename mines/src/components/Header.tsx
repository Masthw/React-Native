import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Flag from './Flag';

interface HeaderProps {
  onFlagPress?: () => void;
  flagsLeft: number;
  onNewGame: () => void;
}

const Header: React.FC<HeaderProps> = ({ onFlagPress, flagsLeft, onNewGame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={onFlagPress}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}>  = {flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
   flexDirection: 'row',
   alignItems: 'center',
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#999',
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#DDD',
    fontWeight: 'bold',
  },
});

export default Header;
