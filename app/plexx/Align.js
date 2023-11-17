export class Align {
  static scaleToGameW(scene, obj, per) {
    obj.displayWidth = scene.game.config.width * per;
    obj.scaleY = obj.scaleX;
  }
  static scaleToGameH(scene, obj) {
    obj.displayHeight = scene.sys.game.config.height;
    obj.scaleX = obj.scaleY;
  }

  static centerH(scene, obj) {
    obj.x = scene.game.config.width / 2 - obj.displayWidth / 2;
  }

  static centerV(scene, obj) {
    obj.y = scene.game.config.height / 2 - obj.displayHeight / 2;
  }

  static center2(scene, obj) {
    obj.x = scene.game.config.width / 2 - obj.displayWidth / 2;
    obj.y = scene.game.config.height / 2 - obj.displayHeight / 2;
  }
  static center(scene, obj) {
    obj.x = scene.game.config.width / 2;
    obj.y = scene.game.config.height / 2;
  }
}
