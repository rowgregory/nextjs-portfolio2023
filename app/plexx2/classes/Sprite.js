export default class Sprite {
  constructor({ position, imgSrc }, ctx) {
    this.position = position
    this.image = new Image()
    this.image.src = imgSrc

    this.ctx = ctx
    this.width = 1000
  }

  draw() {
    if (!this.image) return
    this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width)
  }

  update() {
    this.draw()
  }
}
