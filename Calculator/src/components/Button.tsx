import React from 'react';
import {StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: (Dimensions.get('window').width / 4) * 2,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  buttonTriple: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: (Dimensions.get('window').width / 4) * 3,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});

interface ButtonProps {
  label: string;
  onClick?: (label: string) => void;
  double?: boolean;
  triple?: boolean;
  operation?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  let buttonStyle = styles.button;
  if (props.double) buttonStyle = styles.buttonDouble;
  if (props.triple) buttonStyle = styles.buttonTriple;
  if (props.operation) buttonStyle = styles.operationButton;

  return (
    <TouchableHighlight onPress={() => props.onClick && props.onClick(props.label)} underlayColor="#EFEFEF">
      <Text style={buttonStyle}>{props.label}</Text>
    </TouchableHighlight>
  );
};

export default Button;
