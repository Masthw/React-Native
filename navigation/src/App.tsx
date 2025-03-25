import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ScreenA from './views/ScreenA';
import ScreenB from './views/ScreenB';
import ScreenC from './views/ScreenC';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ScreenA />
     <ScreenB />
     <ScreenC />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
