import Phaser from 'phaser'
import SettingsMenu from '../SettingsMenu'

export default class UIScene extends Phaser.Scene {
  constructor() {
    super('ui')
  }
  create() {
    this.settingsMenu = new SettingsMenu(this)

    const { width } = this.scale
    this.add
      .image(width - 35, 35, 'settings')
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        if (this.settingsMenu.isOpen) {
          this.settingsMenu.hide()
          this.scene.resume('game')
        } else {
          this.settingsMenu.show()
          this.scene.pause('game')
        }
      })
  }
}
