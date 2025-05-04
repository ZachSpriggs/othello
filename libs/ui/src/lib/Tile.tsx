import React from 'react';

export default function Tile({
  value, 
  onClick,
}: {
  value: 'B' | 'W' | null;
  onClick: () => void;
}) {
  return (
    <div 
    onClick={onClick}
    // used ChatGPT to help generate this classname with tailwind to speed up my process
    className="w-14 h-14 bg-green-700 border border-black flex items-center justify-center cursor-pointer"
    >
      {value === 'B' && <div className="w-10 h-10 bg-black rounded-full"/>}
      {value === 'W' && <div className="w-10 h-10 bg-white rounded-full"/>}
    </div>
//     <div
//   onClick={onClick}
//   style={{ width: 56, height: 56, backgroundColor: 'green', border: '1px solid black' }}
// >
//   {value === 'B' && <div style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: '50%' }} />}
//   {value === 'W' && <div style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: '50%' }} />}
// </div>

  );
}