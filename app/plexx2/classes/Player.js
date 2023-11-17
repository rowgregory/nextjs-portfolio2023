export default class Player {
  constructor({ x, y, width, height, gravity }, ctx, canvas) {
    this.position = {
      x,
      y
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.width = width
    this.height = height
    this.gravity = gravity
    this.ctx = ctx
    this.canvas = canvas
    this.canJump = true
    this.speed = 23
  }

  draw() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
      this.velocity.y += this.gravity
    } else this.velocity.y = 0

    // Update the player's position
    //   this.position.x += this.velocity.x;
    //   this.position.y += this.velocity.y;

    //   // Check if the player is below the canvas
    //   if (this.position.y + this.height > this.canvas.height) {
    //     // Adjust the position to stay inside the canvas
    //     this.position.y = this.canvas.height - this.height;
    //     // Stop the player from falling further
    //     this.velocity.y = 0;
    //     this.canJump = true;
    //   } else {
    //     this.velocity.y += this.gravity;
    //   }
  }
}
