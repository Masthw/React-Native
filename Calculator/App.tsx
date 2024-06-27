/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

interface AppState {
  displayValue: string;
  clearDisplay: boolean;
  operation: string | null;
  values: number[];
  current: number;
}

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

function App(): React.JSX.Element {
  const [state, setState] = useState<AppState>(initialState);

  const addDigit = (n: string) => {
   
    const clearDisplay = state.displayValue === '0' || state.clearDisplay;
    if (n === '.' && state.displayValue.includes('.')) {
      return;
    }

    const currentValue = clearDisplay ? '' : state.displayValue;
    const displayValue = n === '.' && clearDisplay ? '0.' : currentValue + n;

    const newState = {
      ...state,
      displayValue,
      clearDisplay: false,
    };

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[state.current] = newValue;
      newState.values = values;
    }

    setState(newState);
  };

  const clearMemory = () => {
    setState(initialState);
  };

  const setOperation = (operation: string) => {
    if (state.current === 0) {
      setState({
        ...state,
        operation,
        current: 1,
        clearDisplay: true,
      });
    } else {
      const equals = operation === '=';
      const values = [...state.values];
      try {
        switch (state.operation) {
          case '+':
            values[0] += values[1];
            break;
          case '-':
            values[0] -= values[1];
            break;
          case '*':
            values[0] *= values[1];
            break;
          case '/':
            values[0] /= values[1];
            break;
        }
      } catch (e) {
        values[0] = state.values[0];
      }

      values[1] = 0;

      setState({
        ...state,
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display value={state.displayValue} />

      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={setOperation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
