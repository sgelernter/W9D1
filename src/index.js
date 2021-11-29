const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;


document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    // const steveO = new MovingObject({pos: [100,100], vel: [10, 10], radius: 20, color: '#351c75'});
    // steveO.draw(ctx);
});


