# p5 in node

Use p5.js inside Node!

## Installation

```bash
npm install p5-in-node p5
```

## Usage

Currently only supports instance mode so as to not pollute the global scope.

```js
import { runSketch, saveAsPNG } from "p5-in-node";

// Sketch function in instance mode
const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.noLoop();
  };

  p.draw = () => {
    p.background(51);
    p.fill(255);
    p.rect(100, 100, 200, 200);

    saveAsPNG(p, "example/lines.png");
  };
};

runSketch(sketch, 400, 400);
```

Here, the sketch function receives the p5 instance as an argument, which can be used to define event functions, like `setup()` and `draw()`. Its API is the same as p5.js.

The library exports two functions - `runSketch()` and `saveAsPNG()`:

- `runSketch(sketchFn, w, h)`:
  - `sketchFn`: The p5 sketch function
  - `w`: width of the canvas
  - `h`: height of the canvas
- `saveAsPNG(pInst, filename)`
  - `pInst`: the p5 instance
  - `filename`: the filename to save the image as
