import Phaser from 'phaser'
import { ArrowControls } from '../ArrowControls'
import { GameManager } from '../GameManager'
import Plant from '../enemies/Plant'
import { createPlantAnims } from '../anims/PlantAnimations'
import { createWalkingAnims } from '../anims/WalkingAnimations'
import '../characters/Hero'

export default class Level1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Level1' })
    this.debugGraphics
    this.plants
    this.heroPlantCollider
  }

  preload() {}

  create() {
    this.scene.launch('ui')

    createPlantAnims(this.anims)
    createWalkingAnims(this.anims)

    const map = this.make.tilemap({ key: 'map' })
    const tileset = map.addTilesetImage('fantasy-tiles', 'groundTiles')

    map.createLayer('Shrubs', tileset, 0, 0)
    let groundLayer = map.createLayer('Ground', tileset, 0, 0)
    groundLayer.setCollisionByProperty({ collides: true })

    const debugGraphics = this.add.graphics().setAlpha(0.7)
    groundLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    })

    this.hero = this.add.hero(75, 872, 'sprite-1').setFrame(4)

    this.physics.world.enable(this.hero)
    this.physics.add.collider(this.hero, groundLayer)
    this.physics.world.setBounds(
      0,
      0,
      this.game.config.width,
      this.game.config.height
    )

    this.cameras.main.startFollow(this.hero, true)
    this.cameras.main.setBounds(0, 0, groundLayer.width, groundLayer.height)

    this.background = this.add
      .tileSprite(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2,
        this.sys.game.config.width,
        this.sys.game.config.height,
        'background'
      )
      .setScrollFactor(0, 0)
      .setScale(1)
      .setDepth(-2)

    this.arrowControls = new ArrowControls(this, this.hero, this.background)

    this.gameManager = new GameManager(this)

    this.plants = this.physics.add.group({
      classType: Plant,
      createCallback: (go) => {
        const plantGo = go
        plantGo.body.collide = true
      }
    })

    const plantBossLayer = map.getObjectLayer('Forest Plant Boss Walking')
    plantBossLayer.objects.forEach((obj) => {
      this.plants.get(
        obj.x + obj.width * 0.5,
        obj.y - obj.height * -0.65,
        'forest-boss-plant-walk'
      )
    })

    this.physics.add.collider(this.plants, groundLayer)

    this.heroPlantCollider = this.physics.add.collider(
      this.plants,
      this.hero,
      this.handleHeroPlantCollision,
      undefined,
      this
    )
  }

  handleHeroPlantCollision(obj1, obj2) {
    const plant = obj2
    const dx = this.hero.x - plant.x
    const dy = this.hero.y - plant.y

    const dir = new Phaser.Math.Vector3(dx, dy).normalize().scale(200)

    this.hero.handleDamage(dir)

    if (this.hero.health <= 0) {
      this.heroPlantCollider.destroy()
    }
  }

  update() {
    if (!this.arrowControls || !this.hero) return

    this.arrowControls.update()

    if (this.hero.y - 28 >= 960 && !this.hasRespawned) {
      this.gameManager.respawnSprite(this.hero)
    }
  }
}
