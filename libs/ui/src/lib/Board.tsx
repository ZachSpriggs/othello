import React from 'react';
import Tile from './Tile';
import { useAppSelector, useAppDispatch } from '@othello/store';
import { makeMove } from '@othello/store';

export default function Board({ showHighlights }: { showHighlights: boolean }) {
  const board = useAppSelector(s => s.game.board);
  const validMoves = useAppSelector(s => s.game.validMoves);
  const dispatch = useAppDispatch();
  const size = board[0]?.length ?? 8;

  return (
    <div
      className="grid gap-0 border border-black"
      style={{
        gridTemplateColumns: `repeat(${size}, 3.5rem)`,
        gridAutoRows: '3.5rem',
      }}
    >
      {board.map((row, r) =>
        row.map((cell, c) => {
          const isValid = validMoves.some(m => m.row === r && m.col === c);
          return (
            <Tile
              key={`${r}-${c}`}
              value={cell}
              isValid={isValid}
              showHighlights={showHighlights}
              onClick={() => dispatch(makeMove({ row: r, col: c }))}
            />
          );
        })
      )}
    </div>
  );
}

