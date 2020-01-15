
var s = [];
var f;
var coorList = [];
var score = 0;
var element = document.getElementById('score');

function setup() {
	createCanvas(400,400);
	s.push(new snake());
	f = new food();
	frameRate(5);
	let left,up,right,down;
	left = createButton('left');
	left.mousePressed(leftPress);
	up = createButton('. '+'up'+' .');
	up.mousePressed(upPress);
	right = createButton('right');
	right.mousePressed(rightPress);
	down = createButton('down');
	down.mousePressed(downPress);
	left.position(430, 200);
	up.position(445, 175);
	right.position(470, 200);
	down.position(445, 225);
	
}

function draw() {
	background(0);
	fill(255)
	var dupCoorList = [];
	s[0].prevx = s[0].x;
	s[0].prevy = s[0].y;
	s[0].move();
	dupCoorList.push([s[0].x,s[0].y]);
	for (var i=1; i<s.length; i++) {
		s[i].prevx = s[i].x;
		s[i].prevy = s[i].y;
		s[i].x = s[i-1].prevx;
		s[i].y = s[i-1].prevy;
		dupCoorList.push([s[i].x,s[i].y]);
	}

	f.show();
	for (var i=0; i<s.length; i++) {
		s[i].show();
	}

	if (s[0].x === f.x && s[0].y === f.y) {
		f.new();
		score++;
		element.innerHTML = 'Score : ' + score;
		var t = new snake();
		t.x = s[s.length-1].x;
		t.y = s[s.length-1].y;
		s.push(t);
	}

	coorList = dupCoorList;

	for (var i=2;i<s.length;i++) {
		if (s[0].x === s[i].x && s[0].y === s[i].y) {
			alert('Game Over');
		}
	}
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		if(s[0].yvelocity != 1) {
			s[0].xvelocity = 0;
			s[0].yvelocity = -1;
		}
	} else if(keyCode === DOWN_ARROW) {
		if(s[0].yvelocity != -1) {
			s[0].xvelocity = 0;
			s[0].yvelocity = 1;
		}
	} else if(keyCode === LEFT_ARROW) {
		if(s[0].xvelocity != 1) {
			s[0].xvelocity = -1;
			s[0].yvelocity = 0;
		}
	} else if(keyCode === RIGHT_ARROW) {
		if(s[0].xvelocity != -1) {
			s[0].xvelocity = 1;
			s[0].yvelocity = 0;
		}
	}
}

function leftPress() {
	if(s[0].xvelocity != 1) {
		s[0].xvelocity = -1;
		s[0].yvelocity = 0;
	}
}

function rightPress() {
	if(s[0].xvelocity != -1) {
		s[0].xvelocity = 1;
		s[0].yvelocity = 0;
	}
}

function upPress() {
	if(s[0].yvelocity != 1) {
		s[0].xvelocity = 0;
		s[0].yvelocity = -1;
	}
} 

function downPress() {
	if(s[0].yvelocity != -1) {
		s[0].xvelocity = 0;
		s[0].yvelocity = 1;
	}
}













