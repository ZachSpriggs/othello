import React, { useState }from 'react';

export default function Tile({
  value, 
  onClick,
  isValid = false,
  showHighlights,
}: {
  value: 'B' | 'W' | null;
  onClick: () => void;
  isValid?: boolean;
  showHighlights: boolean;
}) {

  const [error, setError] = useState(false);

  function handleClick() {
    if(!isValid) {
      setError(true);
      setTimeout(() => setError(false), 200);
    }
    onClick();
  }

  let ringClass = '';
  if (error) {
    ringClass = 'ring-2 ring-inset ring-red-500';
  } else if (showHighlights && isValid) {
    ringClass = 'ring-2 ring-inset ring-yellow-400';
  }

  return (
    <div 
    onClick={handleClick}
    // used ChatGPT to help generate this classname with tailwind to speed up my process
    className={`
      w-14 h-14 bg-green-700 border border-black flex items-center justify-center cursor-pointer
      ${ringClass}
    `}
    >
      {value === 'B' && <div className="w-10 h-10 bg-black rounded-full"/>}
      {value === 'W' && <div className="w-10 h-10 bg-white rounded-full"/>}
    </div>
  );
}