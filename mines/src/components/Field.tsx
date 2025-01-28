import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import params from '../params';

const Field: React.FC = () => {
    const styleField: StyleProp<ViewStyle>[] = [styles.field];
    if (styleField.length === 1) {styleField.push(styles.regular);}

    return (
        <View style={styleField} />
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
});

export default Field;
