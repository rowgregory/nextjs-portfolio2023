import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import Boot from './scenes/Boot';
import Level1 from './scenes/Level1';
import UIScene from './scenes/UIScene';

export function initializeGame(ref) {
  const config = {
    type: Phaser.AUTO,
    title: 'plexx',
    parent: 'game-content',
    width: window.innerWidth,
    height: 593,
    pixelArt: true,
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      zoom: 1.0,
    },
    scene: [Preloader, Level1, UIScene],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 1000 },
        // debug: true,
      },
    },
    plugins: {
      scene: [],
    },
    backgroundColor: 'none',
  };

  return new Phaser.Game(config);
}
