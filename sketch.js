let img;
let particles = [];
let particles2 = [];
let angle = 0;
let song;

function preload() {
  song = loadSound('ColdBlue2.mp3');
}

function setup() {
  img = loadImage("people.png");
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  song.loop();
}

function draw() {
  background(0);
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle(width / 2-10, 0));
  }
  for (let i = 0; i < 3; i++) {
    particles2.push(new Particle(width / 2-10, height));
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
  image(img, -90, -20, 1200, 1020);
  push();
  translate(500, 500);
  rotate();
  rotate(angle);
  noFill();
  rectMode(CENTER);
  stroke(255);
  strokeWeight(10);
  rect(0, 0, 1005, 1005);
  stroke(255, 220);
  strokeWeight(10);
  rect(0, 0, 905, 905);
  stroke(255, 200);
  strokeWeight(10);
  rect(0, 0, 805, 805);
  stroke(255, 180);
  strokeWeight(10);
  rect(0, 0, 705, 705);
  stroke(255, 160);
  strokeWeight(8);
  rect(0, 0, 605, 605);
  stroke(255, 105);
  strokeWeight(7);
  rect(0, 0, 505, 505);
  stroke(255, 85);
  strokeWeight(6);
  rect(0, 0, 405, 405);
  stroke(255, 65);
  strokeWeight(5);
  rect(0, 0, 305, 305);
  stroke(255, 45);
  strokeWeight(4);
  rect(0, 0, 205, 205);
  stroke(255, 25);
  strokeWeight(3);
  rect(0, 0, 105, 105);
  stroke(255, 5);
  strokeWeight(2);
  rect(0, 0, 10, 10);
  angle = angle + 0.1;
  pop();

  push();
  translate(500, 500);
  rotate();
  rotate(-angle);
  noFill();
  rectMode(CENTER);
  stroke(255, 200);
  strokeWeight(10);
  rect(0, 0, 1005, 1005);
  stroke(255, 220);
  strokeWeight(10);
  rect(0, 0, 905, 905);
  stroke(255, 200);
  strokeWeight(10);
  rect(0, 0, 805, 805);
  stroke(255, 180);
  strokeWeight(10);
  rect(0, 0, 705, 705);
  stroke(255, 160);
  strokeWeight(8);
  rect(0, 0, 605, 605);
  stroke(255, 105);
  strokeWeight(7);
  rect(0, 0, 505, 505);
  stroke(255, 85);
  strokeWeight(6);
  rect(0, 0, 405, 405);
  stroke(255, 65);
  strokeWeight(5);
  rect(0, 0, 305, 305);
  stroke(255, 45);
  strokeWeight(4);
  rect(0, 0, 205, 205);
  stroke(255, 25);
  strokeWeight(3);
  rect(0, 0, 105, 105);
  stroke(255, 5);
  strokeWeight(2);
  rect(0, 0, 10, 10);
  angle = angle + 0.1;
  pop();
}
