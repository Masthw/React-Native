import React from 'react';
import { StyleSheet, View } from 'react-native';
import Field from './Field';


type Cell = {
  row: number;
  column: number;
  opened: boolean;
  flagged: boolean;
  mined: boolean;
  exploded: boolean;
  nearMines: number;
};

type Board = Cell[][];

interface MinefieldProps {
  board: Board;
  onOpenField: (row: number, column: number) => void;
  onSelectField: (row: number, column: number) => void;
}

const Minefield: React.FC<MinefieldProps> = ({ board, onOpenField, onSelectField }) => {
  return (
    <View style={styles.container}>
      {board.map((row, r) => (
        <View key={r} style={styles.row}>
          {row.map((field, c) => (
            <Field {...field} key={`${r}-${c}`}
             onOpen={() => onOpenField(r, c)}
             onSelect={() => onSelectField(r, c)}/>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flexDirection: 'column', // Empilhar as linhas corretamente
  },
  row: {
    flexDirection: 'row', // As células dentro da linha ficam lado a lado
  },
});

export default Minefield;
