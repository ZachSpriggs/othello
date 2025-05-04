import React from 'react';
import { Board, Scoreboard, Modal } from '@othello/ui';
import { useAppDispatch, useAppSelector } from '@othello/store';
import { reset } from '@othello/store';
import '../styles.css';

export default function App() {
  const dispatch = useAppDispatch();
  const isGameOver = useAppSelector(state => state.game.isGameOver);
  const score = useAppSelector(state => state.game.score);

  let winner: "B" | "W" | null=null;
  if(isGameOver) {
    if(score.B > score.W){
      winner = "B";
    } else if (score.W > score.B){
      winner = "W";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 p-4">
      <h1 className="text-3xl font-bold">Welcome to Othello</h1>
      <Scoreboard/>
      <Board/>
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