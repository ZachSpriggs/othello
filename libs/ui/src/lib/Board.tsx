import React from 'react';
import Tile from './Tile';
import { useAppSelector, useAppDispatch } from '@othello/store';
import { makeMove } from '@othello/store';

export default function Board() {
  const board = useAppSelector((state) => state.game.board);
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-8 gap-0 border border-black w-[448px]">
      {board.map((row, rowIdx) =>
        row.map((cell, cellIdx) => (
          <Tile
          key={`${rowIdx}-${cellIdx}`}
          value={cell}
          onClick={() => dispatch(makeMove({row: rowIdx, col: cellIdx}))}
          />
        ))
      )}
    </div>
  );
}