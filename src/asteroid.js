const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(pos) {
    Util.inherits(this, MovingObject);
    this.pos = pos;
    this.color = "#02B1B0";
    this.radius = 25;
    this.vel = Util.randomVec(Math.floor(Math.random() * 10));
};

// Asteroid.COLOR = function() {
//     this.color = "#02B1B0";
// }