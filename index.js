const p5 = require("p5");

new p5((p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };
  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(100, 100, 200, 200);
  };
});
