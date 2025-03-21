import params from './src/params';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Minefield from './src/components/MineField';
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines } from './src/functions';

type GameState = {
  board: ReturnType<typeof createMinedBoard>;
  won: boolean,
  lost: boolean,
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  const createGameState = (): GameState => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, minesAmount()),
      won: false,
      lost: false,
    };
  };
  const [gameState, setGameState] = useState<GameState>(createGameState);

  const onOpenField = ( row: number, column: number) => {
    const board = cloneBoard(gameState.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeu');
    }
    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!');
    }
    setGameState({ board, lost, won });
  };


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
          <Text style={styles.instructions}>
            Tamanho da grade: {params.getRowsAmount()}x
            {params.getColumnsAmount()}
          </Text>
          <View style={styles.board}>
            <Minefield board={gameState.board}
            onOpenField={onOpenField}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
   alignItems: 'center',
   backgroundColor: '#aaa',
  },
  instructions: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
