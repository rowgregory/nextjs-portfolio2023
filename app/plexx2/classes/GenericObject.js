export default class GenericObject {
  constructor({ x, y, image }, ctx) {
    this.position = { x, y }

    this.image = image

    this.width = image.width
    this.height = image.height

    this.ctx = ctx
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }
}
