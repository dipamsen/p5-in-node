import { runSketch, saveAsPNG } from "../index.js";

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
  };
  p.draw = () => {
    p.background(51);
    p.translate(p.width / 2, p.height / 2);
    p.colorMode(p.HSB);
    for (let a = 0; a < p.TWO_PI; a += 0.3) {
      p.stroke(p.map(a, 0, p.TWO_PI, 0, 255), 100, 100);
      p.line(0, 0, 100 * p.cos(a), 100 * p.sin(a));
    }
    saveAsPNG(p, "example/lines.png");
  };
};

runSketch(sketch, 400, 400);
