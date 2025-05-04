import React from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Player } from '@othello/game-core';

export interface ModalProps {
  winner: Player;
  onClose: () => void;
}

export default function Modal({ winner, onClose }: ModalProps) {
  const winnerName = winner === 'B' ? 'Black' : 'White';

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-sm w-full text-center"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">
          Congratulations {winnerName}, you have won!
        </h2>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
