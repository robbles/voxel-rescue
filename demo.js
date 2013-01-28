/*jshint asi:true */

var createGame = require('voxel-engine')
var texturePath = require('painterly-textures')(__dirname)
var rescue = require('./')

var container = document.querySelector('#container')

var game = createGame({
  startingPosition: [0, 1000, 0],
  texturePath: texturePath,
  materials: [['grass', 'dirt', 'grass_dirt'], 'bedrock'],
  generate: function(x,y,z) {
    if(y === 0 && x > -4 && x < 4 && z > -4 && z < 4) { return 1; }
    if(y === -20 && x > -20 && x < 20 && z > -20 && z < 20) { return 2; }
    return 0;
  }
})

window.game = game // for debugging
game.controls.pitchObject.rotation.x = -1.5 // look down
game.appendTo(container)
game.currentMaterial = 1

var rescuer = rescue(game, {
  frequency: 100
});

rescuer.on('rescue', function(position) {
  console.log('Rescued player from position:')
  console.log(position)
})

container.addEventListener('click', function() {
  game.requestPointerLock(container)
})

