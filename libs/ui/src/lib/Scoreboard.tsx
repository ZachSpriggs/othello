import React from 'react';
import { useAppSelector } from '@othello/store';

export default function Scoreboard() {
  const {B, W} = useAppSelector(state => state.game.score);
  const current = useAppSelector(state => state.game.currentPlayer);

  return (
    <div className="flex space-x-4 text-lg">
      <div className={current === "B" ? "font-bold" : ""}>Black: {B}</div>
      <div className={current === "W" ? "font-bold" : ""}>White: {W}</div>
    </div>
  );
}