function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(20);
}

function draw() {
	if (keyIsPressed) {
		let r = int(random(256));
		let g = int(random(256));
		let b = int(random(256));
		background(r, g, b);
	}
	if (mouseIsPressed) {
		let randomR = int(random(256));
		let randomG = int(random(256));
		let randomB = int(random(256));
		let randomD = int(random(6)) * 10;
		fill(randomR, randomG, randomB);
		stroke(randomR, randomG, randomB);
		ellipse(mouseX, mouseY, randomD, randomD);
	}
}
