let img;
let particles = [];
let particles2 = [];

function setup() {
  img = loadImage("people.png");
  createCanvas(1200, 1000);
}

function draw() {
  background(0);
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle(width / 2, 0));
  }
  for (let i = 0; i < 3; i++) {
    particles2.push(new Particle(width / 2, height));
  }

  for (let particle of particles) {
    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);
    particle.update();
    particle.show();
  }

  for (let particle2 of particles2) {
    let gravity2 = createVector(0, -0.2);
    particle2.applyForce(gravity2);
    particle2.update();
    particle2.show();
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
  image(img, 50, 30,1100,940);
  noStroke();
  fill(255);
  rect(0, 0, width, 30);
  fill(255);
  rect(0, height-30, width, 30);
}
