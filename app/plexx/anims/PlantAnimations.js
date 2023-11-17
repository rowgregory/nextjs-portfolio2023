import Phaser from 'phaser'

const createPlantAnims = (anims) => {
  anims.create({
    key: 'plant-walk',
    frames: anims.generateFrameNames('plant-enemy-walk', {
      start: 0,
      end: 5,
      prefix: 'tile00',
      suffix: '.png'
    }),
    repeat: -1,
    frameRate: 10
  })

  anims.create({
    key: 'plant-idle',
    frames: anims.generateFrameNames('plant-enemy-idle', {
      start: 0,
      end: 3,
      prefix: 'tile00',
      suffix: '.png'
    }),
    repeat: -1,
    frameRate: 10
  })
}

export { createPlantAnims }
