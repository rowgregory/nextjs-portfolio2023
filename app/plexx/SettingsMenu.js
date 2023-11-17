export default class SettingsMenu {
  constructor(scene) {
    this.scene = scene
    this._opened = false

    this.settingsMenu = this.scene.add
      .image(
        this.scene.sys.game.config.width / 2,
        this.scene.sys.game.config.height / 2,
        'menu-panel'
      )
      .setAlpha(0)

    this.homeBtn = this.scene.add
      .image(
        this.scene.sys.game.config.width / 2,
        this.scene.sys.game.config.height / 2,
        'home'
      )
      .setAlpha(0)
      .setInteractive()
      .on('pointerdown', () => {
        window.location.href = '/'
      })
  }

  get isOpen() {
    return this._opened
  }

  show() {
    if (this._opened) {
      return
    }
    this.scene.tweens.add({
      targets: [this.settingsMenu, this.homeBtn],
      alpha: 1,
      duration: 300,
      ease: Phaser.Math.Easing.Sine.InOut
    })

    this._opened = true
  }
  hide() {
    if (!this._opened) {
      return
    }
    this.scene.tweens.add({
      targets: [this.settingsMenu, this.homeBtn],
      alpha: 0,
      duration: 300,
      ease: Phaser.Math.Easing.Sine.InOut
    })

    this._opened = false
  }

  preload() {}
}
