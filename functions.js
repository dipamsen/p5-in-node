import fs from "fs";
async function saveAsPNG(p5Inst, filename = "sketch") {
  const buffer = p5Inst._renderer.drawingContext.canvas.toBuffer();
  await fs.promises.writeFile(filename, buffer);
}

function getBuffer(p5Inst) {
  return p5Inst._renderer.drawingContext.canvas.toBuffer();
}

import { createCanvas } from "canvas";
import { JSDOM } from "jsdom";
import { performance } from "perf_hooks";
function setupWindow(w, h) {
  const dom = new JSDOM();
  global.window = global;
  global.HTMLCanvasElement = dom.window.HTMLCanvasElement;
  global.document = dom.window.document;

  const nodeCanvas = createCanvas(w, h);
  dom.window.HTMLCanvasElement.prototype.getContext = (type) => {
    return nodeCanvas.getContext(type);
  };

  global.performance = performance;

  global.screen = {};

  global.addEventListener = dom.window.addEventListener.bind(dom.window);
  global.removeEventListener = dom.window.removeEventListener.bind(dom.window);

  global.navigator = { userAgent: "node" };
}

export { saveAsPNG, getBuffer, setupWindow };
