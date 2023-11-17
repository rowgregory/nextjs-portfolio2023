import Phaser from 'phaser';

export default class Hero extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.healthState = Hero.HealthState.IDLE;
    this.damageTime = 0;
    this._health = 3;
    this._coins = 0;
  }
  get health() {
    return this._health;
  }

  static HealthState = Object.freeze({
    IDLE: 'IDLE',
    DAMAGE: 'DAMAGE',
    DEAD: 'DEAD',
  });

  handleDamage(dir) {
    if (this._health === 0) {
      return;
    }
    if (this.healthState === Hero.HealthState.DAMAGE) {
      return;
    }

    --this._health;

    if (this._health <= 0) {
      this.healthState = Hero.HealthState.DEAD;
    } else {
      this.setVelocity(dir.x, dir.y);
      this.setTint(0xff0000);
      this.healthState = Hero.HealthState.DAMAGE;
    }
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    switch (this.healthState) {
      case Hero.HealthState.IDLE:
        break;

      case Hero.HealthState.DAMAGE:
        this.damageTime += dt;
        if (this.damageTime >= 250) {
          this.healthState = Hero.HealthState.IDLE;
          this.setTint(0xff0000);
        }
        break;
    }
  }
}

Phaser.GameObjects.GameObjectFactory.register(
  'hero',
  function (x, y, texture, frame) {
    let sprite = new Hero(this.scene, x, y, texture, frame);

    this.displayList.add(sprite);
    this.updateList.add(sprite);

    this.scene.physics.world.enableBody(
      sprite,
      Phaser.Physics.Arcade.DYNAMIC_BODY
    );

    return sprite;
  }
);
