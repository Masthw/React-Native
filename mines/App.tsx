import params from './src/params';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Field from './src/components/Field';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Iniciando o Mines!!!</Text>
          <Text style={styles.instructions}>
            Tamanho da grade: {params.getRowsAmount()}x
            {params.getColumnsAmount()}
          </Text>
          <Field />
          <Field opened />
          <Field opened nearMines={7} />
          <Field mined />
          <Field opened mined exploded />
          <Field flagged />
          <Field flagged opened/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  instructions: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
