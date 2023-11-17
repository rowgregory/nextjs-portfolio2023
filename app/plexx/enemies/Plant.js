import Phaser from 'phaser';

export default class Plant extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.direction = 'LEFT';
    this.anims.play('plant-idle');
    this.moveEvent;

    scene.physics.world.on(
      Phaser.Physics.Arcade.TILE_COLLIDE,
      this.handleTileCollision,
      this
    );

    this.moveEvent = scene.time.addEvent({
      delay: 2000,
      callback: () => {
        this.direction = this.direction === 'LEFT' ? 'RIGHT' : 'LEFT';
      },
      loop: true,
    });
  }

  static Direction = Object.freeze({
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
  });

  handleTileCollision(go, tile) {
    console.log('HANDLE TILE COLLISION');
    if (go !== this) {
      return;
    }

    this.setVelocity(0, 0);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    const speed = 0;

    switch (this.direction) {
      case Plant.Direction.LEFT:
        this.setVelocity(speed, 0);
        break;

      case Plant.Direction.RIGHT:
        this.setVelocity(speed, 0);
        break;
    }
  }
}
