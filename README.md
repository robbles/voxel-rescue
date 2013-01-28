# voxel-rescue

Automatically teleport the player back to a known location if they enter a certain region of the world (e.g. fall off the map)

NOTE: this module is based pretty heavily on [maxogden/voxel-highlight](https://github.com/maxogden/voxel-highlight).

```
npm install voxel-rescue
```

## example

```javascript
var rescue = require('voxel-rescue')
rescue(game)
```

### rescue(gameInstance, optionalOptions)

options can be:

```javascript
{
  frequency:  // how often in milliseconds to check player position, default is 500.
  position:   // where to teleport the player when they enter the danger zone, default is game.startingPosition.
  teleport:   // if false, do not teleport the player automatically, only emit a 'rescue' event. default is true.
  dangerZone: // area to rescue the player from. default is:
  {
    lower: {x: -Infinity, y: -Infinity, z: -Infinity},
    upper: {x: Infinity, y: -100, z: Infinity}
  }
}
```

### rescue.on('rescue', function(position) {})

gets called when player is rescued with the position they were at when rescued.

# Get the demo running on your machine

The first time you set up, you should install the required npm packages:

```
cd voxel-rescue
npm install
npm install browserify -g
```

Then run the start script (which you'll need to do every time you want to run the demo):

```
npm start
```

Then point your browser to [http://localhost:8080](http://localhost:8080) and have fun!

If you get stuck then look at the [readme for voxel-hello-world](http://github.com/maxogden/voxel-hello-world)

## license

BSD
