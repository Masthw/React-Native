import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CentralTextProps {
    children: string
    backgroundColor?: string
    textColor?: string
}

const CentralText: React.FC<CentralTextProps> = ({children, backgroundColor, textColor}) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor || '#000'}]}>
      <Text style={[styles.text, {color: textColor || '#FFF'}]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });


export default CentralText;
