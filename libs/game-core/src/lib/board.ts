export function initializeBoard(): ("B" | "W" | null)[][] {
  const board = Array.from({length: 8}, () => Array(8).fill(null));
  board[3][3] = "W";
  board[3][4] = "B";
  board[4][3] = "B";
  board[4][4] = "W";
  return board;
}