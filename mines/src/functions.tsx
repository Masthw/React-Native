/* eslint-disable @typescript-eslint/no-shadow */
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

const createBoard = (rows: number, columns: number): Board => {
  return Array.from({length: rows}, (_, row) =>
    Array.from(
      {length: columns},
      (_, column): Cell => ({
        row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false,
        nearMines: 0,
      }),
    ),
  );
};

const spreadMines = (board: Board, minesAmount: number): void => {
  const rows = board.length;
  const columns = board[0]?.length || 0;
  let minesPlanted = 0;

  while (minesPlanted < minesAmount) {
    const rowSel = Math.floor(Math.random() * rows);
    const colSel = Math.floor(Math.random() * columns);

    if (!board[rowSel][colSel].mined) {
      board[rowSel][colSel].mined = true;
      minesPlanted++;
    }
  }
};

const createMinedBoard = (rows : number, columns : number, minesAmount : number): Board => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
};


export {createMinedBoard};
