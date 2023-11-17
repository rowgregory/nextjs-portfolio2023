import Phaser from 'phaser'

export class GameManager {
  constructor(scene) {
    this.scene = scene
    this.hasRespawned = false
    this.controlsEnabled = true
  }

  async respawnSprite(sprite) {
    this.controlsEnabled = false
    sprite.body.allowGravity = false
    if (!this.hasRespawned) {
      this.hasRespawned = true
      this.scene.cameras.main.stopFollow()
      sprite.setAlpha(0)
      sprite.setVelocity(0)

      const ghost = this.scene.add.image(sprite.x, sprite.y, 'sprite-1')
      ghost.setAlpha(0.6)
      ghost.setFrame(4)
      this.scene.tweens.chain({
        targets: ghost,
        tweens: [
          {
            x: sprite.x - 10,
            y: sprite.y - 80,
            duration: 250,
            ease: 'linear'
          },
          {
            x: sprite.x + 10,
            y: sprite.y - 120,
            duration: 500,
            ease: 'linear'
          },
          {
            x: sprite.x - 10,
            y: sprite.y - 200,
            duration: 750,
            ease: 'linear',
            onComplete: () => {
              this.hasRespawned = false
              ghost.destroy()
              sprite.body.allowGravity = true
              this.scene.cameras.main.startFollow(sprite)
              this.controlsEnabled = true
              sprite
                .setX(75)
                .setY(750)
                .setScale(1)
                .setAlpha(1)
                .setFrame(4)
                .enableBody(true, 75, 750, true, true)
            }
          }
        ]
      })
    }
  }
}
