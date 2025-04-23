import React from 'react';
import {StyleSheet, View} from 'react-native';
import Feed from './src/screens/Feed';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
    <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
