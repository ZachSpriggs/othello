import React, { useState } from 'react';
import { Board, Scoreboard, Modal } from '@othello/ui';
import { useAppDispatch, useAppSelector } from '@othello/store';
import { Player } from '@othello/types';
import { reset } from '@othello/store';
import '../styles.css';

export default function App() {
  const dispatch = useAppDispatch();
  const isGameOver = useAppSelector((s) => s.game.isGameOver);
  const score = useAppSelector((s) => s.game.score);

  const [showHighlights, setShowHighlights] = useState(false);

  let winner: Player | null = null;
  if (isGameOver) {
    if (score.B > score.W){
      winner = 'B';
    }
    else if (score.W > score.B) {
      winner = 'W';
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 p-4">
      <h1 className="text-3xl font-bold">Welcome to Othello</h1>
      <Scoreboard />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={showHighlights}
          onChange={(e) => setShowHighlights(e.target.checked)}
          className="form-checkbox h-5 w-5"
        />
        <span>Show valid-move highlights</span>
      </label>

      <Board showHighlights={showHighlights} />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => dispatch(reset())}
      >
        Reset Game
      </button>

      {isGameOver && winner && (
        <Modal winner={winner} onClose={() => dispatch(reset())} />
      )}
    </div>
  );
}
