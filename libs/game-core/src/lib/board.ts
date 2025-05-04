import { Board, Player } from '@othello/types';

export function initializeBoard(size = 8): Board {
  const board: Board = Array.from(
    { length: size },
    () => Array<Player | null>(size).fill(null)
  );

  const mid1 = size / 2 - 1;
  const mid2 = size / 2;

  board[mid1][mid1] = 'W';
  board[mid1][mid2] = 'B';
  board[mid2][mid1] = 'B';
  board[mid2][mid2] = 'W';

  return board;
}
