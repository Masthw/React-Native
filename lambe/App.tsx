import React from 'react';
import Header from './src/components/Header';
import {StyleSheet, View} from 'react-native';
import Post from './src/components/Post';


function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Header />
      <Post image={require('./assets/imgs/fence.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
