import { setupWindow } from "./functions.js";

export function runSketch(sketchFn, w, h) {
  setupWindow(w, h);
  import("p5").then(({ default: p5 }) => {
    new p5(sketchFn);
  });
}

export { saveAsPNG } from "./functions.js";
