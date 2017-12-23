class Prey {
  constructor(p) {
    this.p = p;
    this.location = p.createVector(p.random(p.width), p.random(p.height));
    this.mass = 2;
    this.size = p.createVector(8, 20);
    this.perlinTimeX = 0;
    this.perlinTimeY = 100;
  }

  move() {
    const p = this.p;
    this.location.set(
      p.map(p.noise(this.perlinTimeX), 0, 1, 0, p.width),
      p.map(p.noise(this.perlinTimeY), 0, 1, 0, p.height)
    );
    this.perlinTimeX += 0.001;
    this.perlinTimeY += 0.001;
    return this;
  }

  show() {
    const p = this.p;
    p.noStroke();
    p.fill(6, 150, 80);
    p.ellipse(this.location.x, this.location.y, this.size.x, this.size.y);
    return this;
  }
}

export { Prey };
