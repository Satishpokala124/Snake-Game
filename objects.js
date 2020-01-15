
function snake() {
	this.x = 10*floor(random(10,30));
	this.y = 10*floor(random(10,30));
	this.xvelocity = 1;
	this.yvelocity = 0;

	this.show = function() {
		stroke(255);
		fill(255);
		rect(this.x, this.y, -10, -10);
	}

	this.move = function() {
		this.x += 10*(this.xvelocity);
		this.y += 10*(this.yvelocity);
		this.x = constrain(this.x, 10, width);
		this.y = constrain(this.y, 10, height);
	}

	this.prevx;
	this.prevy;
}

function food() {
	this.x = 10*floor(random(0,40));
	this.y = 10*floor(random(0,40));

	this.show = function() {
		stroke(200,0,100);
		fill(200,0,100);
		rect(this.x, this.y, -10, -10);
	}

	this.new = function() {
		this.x = 10*floor(random(1,40));
		this.y = 10*floor(random(1,40));
	}
}