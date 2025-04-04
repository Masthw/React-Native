import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle, Text, TouchableWithoutFeedback} from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

interface FieldProps {
  mined?: boolean;
  opened?: boolean;
  nearMines?: number;
  exploded?: boolean;
  flagged?: boolean;
  onOpen?: () => void;
  onSelect?: () => void;
}

const Field: React.FC<FieldProps> = ({
  mined = false,
  opened = false,
  nearMines = 0,
  exploded = false,
  flagged = false,
  onOpen,
  onSelect,
}) => {
  const styleField: StyleProp<ViewStyle>[] = [styles.field];

  if (opened) {
    styleField.push(styles.opened);
  }
  if (exploded) {
    styleField.push(styles.exploded);
  }
  if (styleField.length === 1) {
    styleField.push(styles.regular);
  }

  let color;
  if (nearMines > 0) {
    if (nearMines === 1) {
      color = '#2a28d7';
    }
    if (nearMines === 2) {
      color = '#2b520f';
    }
    if (nearMines > 2 && nearMines < 6) {
      color = '#F9060A';
    }
    if (nearMines >= 6) {
      color = '#f221a9';
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onOpen}
    onLongPress={onSelect}>
      <View style={styleField}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, {color}]}>{nearMines}</Text>
      ) : (
        false
      )}
      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});

export default Field;
