import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CentralText from './components/CentralText';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CentralText>App</CentralText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
