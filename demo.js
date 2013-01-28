/*jshint asi:true */

var createGame = require('voxel-engine')
var texturePath = require('painterly-textures')(__dirname)
var rescue = require('./')

var container = document.querySelector('#container')

var game = createGame({
  startingPosition: [0, 1000, 0],
  texturePath: texturePath
})

window.game = game // for debugging
game.controls.pitchObject.rotation.x = -1.5 // look down
game.appendTo(container)
game.currentMaterial = 1

var rescuer = rescue(game);

rescuer.on('rescue', function(position) {
  console.log('Rescued player from position:')
  console.log(position)
})

container.addEventListener('click', function() {
  game.requestPointerLock(container)
})

