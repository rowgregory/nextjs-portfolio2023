import Phaser from 'phaser'

export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' })
  }

  preload() {
    this.load.image('logo', 'images/logo.JPG')
  }

  create() {
    const logo = this.add.image(400, 300, 'logo')

    logo.setAlpha(0)

    this.tweens.add({
      targets: logo,
      alpha: 1,
      duration: 2000,
      onComplete: () => {
        this.tweens.add({
          targets: logo,
          alpha: 0,
          duration: 2000,
          onComplete: () => {
            this.scene.start('Preloader')
          }
        })
      }
    })
  }
}
