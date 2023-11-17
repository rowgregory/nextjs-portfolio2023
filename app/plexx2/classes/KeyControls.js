export default class KeyControls {
  constructor(player, keys, canJump) {
    this.handleKeyDown = this.handleKeyDown.bind(this)
    addEventListener('keydown', this.handleKeyDown)

    this.handleKeyUp = this.handleKeyUp.bind(this)
    addEventListener('keyup', this.handleKeyUp)

    this.player = player
    this.keys = keys
  }

  handleKeyDown({ keyCode }) {
    switch (keyCode) {
      case 65:
        console.log('LEFT')
        this.keys.left.pressed = true
        break
      case 83:
        console.log('DOWN')
        break

      case 68:
        console.log('RIGHT')
        this.keys.right.pressed = true
        break

      case 87:
        if (this.player.canJump) {
          this.player.velocity.y -= 60
          this.player.canJump = false
        }
        break
    }
  }

  handleKeyUp({ keyCode }) {
    switch (keyCode) {
      case 65:
        console.log('LEFT')
        this.keys.left.pressed = false
        break
      case 83:
        console.log('DOWN')
        break

      case 68:
        console.log('RIGHT')
        this.keys.right.pressed = false
        break

      case 87:
        // console.log('UP');
        // this.player.velocity.y -= 20;
        break
    }
  }

  destroy() {
    removeEventListener('keydown', this.handleKeyDown)
    removeEventListener('keyup', this.handleKeyUp)
  }
}
