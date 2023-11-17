import Phaser from 'phaser'

const createWalkingAnims = (anims) => {
  anims.create({
    key: 'walkLeft',
    frames: anims.generateFrameNumbers('sprite-1', {
      start: 0,
      end: 3
    }), // Adjust frame range
    frameRate: 10, // Adjust frame rate
    repeat: -1 // -1 means loop indefinitely
  })

  anims.create({
    key: 'walkRight',
    frames: anims.generateFrameNumbers('sprite-1', {
      start: 5,
      end: 8
    }), // Adjust frame range
    frameRate: 10, // Adjust frame rate
    repeat: -1 // -1 means loop indefinitely
  })
}

export { createWalkingAnims }
