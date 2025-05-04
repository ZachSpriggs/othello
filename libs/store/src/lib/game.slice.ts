import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  initializeBoard,
  getValidMoves,
  applyMove,
  countScore,
} from '@othello/game-core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Board, Player, Coordinate } from '@othello/types';

export interface GameState {
  board: Board;
  currentPlayer: Player;
  isGameOver: boolean;
  score: { B: number; W: number };
  validMoves: Coordinate[];
}

const initialBoard = initializeBoard();
const initialPlayer: Player = 'B';

const initialState: GameState = {
  board: initialBoard,
  currentPlayer: initialPlayer,
  isGameOver: false,
  score: countScore(initialBoard),
  validMoves: getValidMoves(initialBoard, initialPlayer),
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: () => initialState,
    makeMove: (state, action: PayloadAction<Coordinate>) => {
      const move = action.payload;
      if (
        !state.validMoves.some(
          (m) => m.row === move.row && m.col === move.col
        )
      ) {
        return;
      }

      const newBoard = applyMove(state.board, move, state.currentPlayer);
      const nextPlayer: Player =
        state.currentPlayer === 'B' ? 'W' : 'B';

      state.board = newBoard;
      state.score = countScore(newBoard);
      state.currentPlayer = nextPlayer;
      state.validMoves = getValidMoves(newBoard, nextPlayer);

      // I used ChatGPT to help me with this logic for passing over
      // the player if they don't have any valid moves.
      if (state.validMoves.length === 0) {
        const opponent: Player = nextPlayer === 'B' ? 'W' : 'B';
        const backMoves = getValidMoves(newBoard, opponent);
        if (backMoves.length === 0) {
          state.isGameOver = true;
          state.validMoves = [];
        } else {
          state.currentPlayer = opponent;
          state.validMoves = backMoves;
        }
      }
    },
  },
});

export const { reset, makeMove } = gameSlice.actions;
export default gameSlice.reducer;
