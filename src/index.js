import 'phaser';
var Game = {};
var config = {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  width: 1100,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

var game = new Phaser.Game(config);
//var scene = game.scene;
var cursor;
var times;
var total;
var timedEvent;
var xx;

function preload() {
  this.load.image('pared', 'assets/pared.jpg');
  this.load.image('tubo', 'assets/tubo.png');
  this.load.image('tubo2', 'assets/tubo2.png');
  this.load.image('tubo3', 'assets/tubo3.png');
  this.load.image('tubo4', 'assets/tubo4.png');
  this.load.image('tubo5', 'assets/tubo5.png');
  this.load.image('sumidero1', 'assets/sumidero1.png');
  this.load.image('sumidero2', 'assets/sumidero2.png');
  this.load.image('panel', 'assets/panel.png');

}

function create() {

  var pared = this.add.image(200, 170, 'pared');
  var sumidero1 = this.add.image(81, 80, 'sumidero1');
  var sumidero2 = this.add.image(550, 500, 'sumidero2');
  var panel = this.add.image(800, 300, 'panel');
  var tubo = this.add.sprite(800, 100, 'tubo').setInteractive();
  var tubo2 = this.add.sprite(800, 200, 'tubo2').setInteractive();
  var tubo3 = this.add.sprite(800, 300, 'tubo3').setInteractive();
  var tubo4 = this.add.sprite(800, 400, 'tubo4').setInteractive();
  var tubo5 = this.add.sprite(800, 500, 'tubo5').setInteractive();


  times = this.add.text(1000, 32);
  times.setText('Tiempo');

  timedEvent = this.time.delayedCall(20000, fadePicture, [], this);

  //createTube('tubo');



//Tubo1
  tubo.on('pointerdown', function() {
    createTube('tubo' , this.scene);
    this.setTint(0x00ff00);


  });

  tubo.on('pointerout', function() {

    this.clearTint();

  });

//Tubo 2
  tubo2.on('pointerover', function() {

    this.setTint(0x00ff00);

  });

  tubo2.on('pointerout', function() {
    createTube('tubo2' , this.scene);
    this.clearTint();

  });

  //tubo 3
  tubo3.on('pointerover', function() {

    this.setTint(0x00ff00);

  });

  tubo3.on('pointerout', function() {
    createTube('tubo3' , this.scene);
    this.clearTint();

  });
  //tubo 4
  tubo4.on('pointerover', function() {

    this.setTint(0x00ff00);

  });

  tubo4.on('pointerout', function() {
    createTube('tubo4' , this.scene);
    this.clearTint();

  });
  tubo5.on('pointerover', function() {

    this.setTint(0x00ff00);

  });

//Tubo 5
  tubo5.on('pointerout', function() {
    createTube('tubo5' , this.scene);
    this.clearTint();

  });




  this.input.on('drag', function(pointer, gameObject, dragX, dragY) {

    gameObject.x = dragX;
    gameObject.y = dragY;

  });

  this.input.on('dragend', function(pointer, gameObject) {

    gameObject.clearTint();

  });

}

function createTube(image, scene) {

  var tubo = scene.add.sprite(200, 200,image).setInteractive();
  scene.input.setDraggable(tubo);

}


function fadePicture() {
  total++;
}


function update() {

  times.setText('Tiempo: ' + (timedEvent.getProgress().toString().substr(0, 4) * 30));

}
