let x = 600;
let y = 450;
let ch = 3;
let img;
let ball = [];
let ball2 = [];

function setup() {
  img = loadImage("people.png");
  createCanvas(1200, 1000);
  for (let i = 0; i < 80; i++) {
    ball[i] = new Ball();
  }
}

function draw() {
  background(255);
  for (let i = 0; i < 80; i++) {
    ball[i].update();
    ball[i].show();
  }
  image(img, 0, 0);
  noStroke();
  fill(255);
  rect(0, height - 60, width, 60);
  // noStroke();
  // fill(0);
  // ellipse(x, y, 20, 20);
  // if(y<50){
  // ch=3;
  // }else if(450<y){
  // ch=-3;
  // }
  // y+=ch;
}
