import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: 'Preloader' })
  }

  preload() {
    this.load.tilemapTiledJSON('map', 'images/ground-layer.json')
    this.load.image('groundTiles', 'images/fantasy-tiles.png')
    this.load.spritesheet('sprite-1', 'images/sprite-1.png', {
      frameWidth: 32,
      frameHeight: 48
    })
    this.load.atlas(
      'plant-enemy-walk',
      'enemies/plant.png',
      'enemies/plant.json'
    )

    this.load.atlas(
      'plant-enemy-idle',
      'enemies/plant-idle.png',
      'enemies/plant-idle.json'
    )

    this.load.image('background', 'images/background4.png')
    this.load.image('settings', 'images/settings.png')
    this.load.image('menu-panel', 'images/BgPanelBox2.png')
    this.load.image('home', 'images/Btn_Home.png')
  }

  create() {
    this.scene.start('Level1')
  }

  update() {}
}
