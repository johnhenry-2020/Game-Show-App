// Reference: https://www.youtube.com/watch?v=GiA6ls9mOL4

let canvas = document.getElementById('confetti');

canvas.width = 1400;
canvas.height = 800;

let ctx = canvas.getContext('2d');
let pieces = [];
let numberOfPieces = 150;
let lastUpdateTime = Date.now();

function randomColor() {
	let colors = [ '#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0' ];
	return colors[Math.floor(Math.random() * colors.length)];
}

function update() {
	let now = Date.now(),
		dt = now - lastUpdateTime;

	for (let i = pieces.length - 1; i >= 0; i--) {
		let p = pieces[i];

		if (p.y > canvas.height) {
			pieces.splice(i, 1);
			continue;
		}

		p.y += p.gravity * dt;
		p.rotation += p.rotationSpeed * dt;
	}

	while (pieces.length < numberOfPieces) {
		pieces.push(new Piece(Math.random() * canvas.width, -20));
	}

	lastUpdateTime = now;

	setTimeout(update, 1);
}

function draw() {
	// https://stackoverflow.com/questions/1664785/resize-html5-canvas-to-fit-window
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// ctx.canvas.width = window.innerWidth;
	// ctx.canvas.height = window.innerHeight;

	pieces.forEach(function(p) {
		ctx.save();

		ctx.fillStyle = p.color;

		ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
		ctx.rotate(p.rotation);

		ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);

		ctx.restore();
	});

	requestAnimationFrame(draw);
}

function Piece(x, y) {
	this.x = x;
	this.y = y;
	this.size = (Math.random() * 0.5 + 0.75) * 15;
	this.gravity = (Math.random() * 2.5 + 0.75) * 0.1;
	this.rotation = Math.PI * 2 * Math.random();
	this.rotationSpeed = Math.PI * 3 * (Math.random() - 0.5) * 0.001;
	this.color = randomColor();
}

while (pieces.length < numberOfPieces) {
	pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
}

update();
draw();
