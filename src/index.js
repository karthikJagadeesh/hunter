import "babel-polyfill";
import p5 from "p5";

import { Prey } from "./prey";

const app = p => {
  let prey;
  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(200);

    prey = new Prey(p);
  };

  p.draw = _ => {
    p.background(200);
    prey.move().show();
  };
};

const appInstance = new p5(app);
