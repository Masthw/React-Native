import params from './src/params';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Minefield from './src/components/MineField';
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, flagsUsed } from './src/functions';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';

type GameState = {
  board: ReturnType<typeof createMinedBoard>;
  won: boolean,
  lost: boolean,
  showLevelSelection: boolean
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
      showLevelSelection: false,
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
    setGameState({ ...gameState, board, lost, won });
  };

  const onSelectField = (row: number, column: number) => {
    const board = cloneBoard(gameState.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if(won) {
      Alert.alert('Parabéns', 'Você Venceu!');
    }
    setGameState({...gameState, board, won, lost: false });
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

const onLevelSelected = (level: number) => {
  params.difficultLevel = level;
  setGameState(createGameState());
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
          <LevelSelection isVisible={gameState.showLevelSelection} onLevelSelected={onLevelSelected}
          onCancel={() => setGameState({...gameState, showLevelSelection: false})} />
          <Header flagsLeft={minesAmount() - flagsUsed(gameState.board)} onNewGame={() => setGameState(createGameState())} onFlagPress={() => setGameState( {...gameState, showLevelSelection: true})} />
          <View style={styles.board}>
            <Minefield board={gameState.board}
            onOpenField={onOpenField}
            onSelectField={onSelectField}/>
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
