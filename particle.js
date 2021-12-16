class Ball {
  constructor() {
    this.x = random(300,width-300);
    this.y = height-30;
    this.s = 20;
  }  

  update() {
	if(this.y<0){
	ch=3;
	}else if(height<this.y){
	ch=-3;
	}
	this.y+=ch;
  }

  show() {
	noStroke();
	fill(0);
	ellipse(this.x, this.y, this.s, this.s);
  }
}