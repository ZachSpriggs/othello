import { Board, Player, Coordinate } from "@othello/types";

const directions: Coordinate[] = [
  {row: -1, col: -1}, 
  {row: -1, col: 0}, 
  {row: -1, col: 1},
  {row: 0, col:-1},
  {row: 0, col: 1},
  {row: 1, col: -1},
  {row: 1, col: 0},
  {row: 1, col: 1}
];

export function getValidMoves(board: Board, player: Player): Coordinate[] {
  const opponent: Player = player === 'B' ? 'W' : 'B';
  const valid: Coordinate[] = [];

  // My logic was off here initially for checking if a move was valid,
  // I was running into an issue where I was able to place a disc 
  // next to my own disc. I used chatgpt here to help flush out the logic

  for(let r = 0; r < 8; r++){
    for(let c = 0; c < 8; c++){
      if(board[r][c] !== null) continue;
      for(const d of directions){
        let rr = r + d.row;
        let cc = c + d.col;
        let seenOpponent = false;
        while(rr >= 0 && rr < 8 && cc >= 0 && cc < 8){
          if(board[rr][cc] === opponent){
            seenOpponent = true;
            rr += d.row;
            cc += d.col;
          } else if (seenOpponent && board[rr][cc] === player){
            valid.push({row: r, col: c});
            break;
          } else {
            break;
          }
        }
        if(valid.some(m => m.row === r && m.col === c)){
          break;
        }
      }
    }
  }
  return valid;
}

export function applyMove(board: Board, move: Coordinate, player: Player): Board {
  const newBoard: Board = board.map(row => [...row]);
  newBoard[move.row][move.col] = player;
  const opponent: Player = player === 'B' ? 'W' : 'B';

  for(const d of directions) {
    const flips: Coordinate[] = [];
    let rr = move.row + d.row;
    let cc = move.col + d.col;
    while(rr >= 0 && rr < 8 && cc >= 0 && cc < 8 && newBoard[rr][cc] === opponent){
      flips.push({row: rr, col: cc});
      rr += d.row;
      cc += d.col;
    }
    if(rr >= 0 && rr < 8 && cc >= 0 && cc < 8 && newBoard[rr][cc] === player){
      for(const flip of flips){
        newBoard[flip.row][flip.col] = player;
      }
    }
  }
  return newBoard;
}

export function countScore(board: Board): {B: number; W: number}{
  return board.flat().reduce(
    (acc, v) => ({
      B: acc.B + (v === "B" ? 1 : 0),
      W: acc.W + (v === "W" ? 1 : 0)
    }), {B: 0, W: 0}
  );
}