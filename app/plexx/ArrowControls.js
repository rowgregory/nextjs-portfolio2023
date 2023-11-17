export class ArrowControls {
  constructor(scene, sprite, background) {
    this.scene = scene;
    this.sprite = sprite;
    this.background = background;
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.canJump = true;
    this.canDoubleJump = true;
  }

  update() {
    const spriteSpeed = 300;
    const spriteWidth = this.sprite.width;
    const controlsEnabled = this.scene.gameManager.controlsEnabled;

    if (this.cursors.left.isDown && controlsEnabled) {
      this.sprite.anims.play('walkLeft', true);
      // Move the player to the left
      this.sprite.setVelocityX(-spriteSpeed);

      // precent user from going off the screen to the left
      if (this.sprite.x - spriteWidth / 2 <= 0) {
        this.sprite.x = spriteWidth;
      }

      // Move the background image from right to left at a slower speed
      this.background.tilePositionX -= 0.3;
    } else if (this.cursors.right.isDown && controlsEnabled) {
      // Play the 'walk' animation
      this.sprite.anims.play('walkRight', true);
      // Move the sprite to the right
      this.sprite.setVelocityX(spriteSpeed); // Adjust the value to control the speed
      // Move the background image from right to left at a slower speed
      this.background.tilePositionX += 0.3;
    } else {
      // If no arrow keys are pressed, stop the sprite's horizontal movement
      this.sprite.setVelocityX(0);
      this.sprite.anims.stop();
    }

    // Check for collisions between the player and the ground layer
    const onGround = this.sprite.body.blocked.down;

    if (!onGround) {
      this.sprite.anims.stop();
    }

    if (this.cursors.up.isDown && onGround && this.canJump) {
      // Apply vertical velocity to make the sprite jump
      this.sprite.setVelocityY(-600); // Adjust the value as needed for the desired jump height

      this.canJump = false;
    }

    // Reset the canJump flag when the player touches the ground
    if (onGround) {
      this.canJump = true;
    }
  }
}
