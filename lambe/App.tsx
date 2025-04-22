import React from 'react';
import Header from './src/components/Header';
import {StyleSheet, View} from 'react-native';
import Post from './src/components/Post';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Header />
      <Post
        image={require('./assets/imgs/fence.jpg')}
        comments={[
          {nickname: 'joao_dev', comment: 'Post irado!'},
          {nickname: 'maria123', comment: 'Muito bom, parabéns!'},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
