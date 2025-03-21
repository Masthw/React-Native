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

const cloneBoard = (board: Board): Board => {
  return board.map(row => {
    return row.map(cell => ({ ...cell }));
  });
};

const getNeighbors = (board: Board, row: number, column: number): Cell[] => {
  const neighbors: Cell[] = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];

  rows.forEach(r => {
    columns.forEach(c => {
      const different = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;
      if (different && validRow && validColumn) {
        neighbors.push(board[r][c]);
      }
    });
  });

  return neighbors;
};

const safeNeighborhood = (board : Board, row : number, column : number): boolean => {
  return getNeighbors(board, row, column).reduce((result, neighbor) => result && !neighbor.mined, true);
};

const openField = (board : Board, row : number, column : number): void => {
  const field = board[row][column];
  if (!field.opened) {
    field.opened = true;
    if(field.mined) {
      field.exploded = true;

    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column));
    } else {
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter(n => n.mined).length;
    }
  }
};

const fields = (board : Board):Cell[] => board.flat();
const hadExplosion = (board: Board): boolean =>
  fields(board).some(field => field.exploded);
const pending = (field: Cell): boolean =>
  (field.mined && !field.flagged) || (!field.mined && !field.opened);
const wonGame = (board: Board): boolean =>
  fields(board).every(field => !pending(field));
const showMines = (board: Board): void => {
  fields(board)
    .filter(field => field.mined)
    .forEach(field => (field.opened = true));
};

export {createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines};
