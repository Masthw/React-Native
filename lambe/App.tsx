import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigator from './src/Navigator';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
   <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
