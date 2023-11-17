'use client';

import { useEffect, useRef } from 'react';
import './main.js';
import { initializeGame } from './main.js';

const canvasOuterContainer = 'flex justify-center items-center h-screen';
const canvasInnerContainer = 'h-[593px]';

const Game = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const game = initializeGame(canvasRef.current);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className={canvasOuterContainer}>
      <div className={canvasInnerContainer}>
        <div ref={canvasRef} id="game-content"></div>
      </div>
    </div>
  );
};

export default Game;
