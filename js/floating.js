// Reference: https://www.html5canvastutorials.com/

window.onload = function(argument) {
	var lyric =
		' user interaction front end linkedin apprenticeship blessed gifted apprenticeship team resilience jonathan jolivette software engineer apprentice  user interaction front end linkedin apprenticeship blessed gifted apprenticeship team resilience jonathan jolivette software engineer apprentice   user interaction front end linkedin apprenticeship blessed gifted apprenticeship team resilience jonathan jolivette software engineer apprentice   user interaction front end linkedin apprenticeship blessed gifted apprenticeship team resilience jonathan jolivette software engineer apprentice user interaction front end linkedin apprenticeship blessed gifted apprenticeship team resilience jonathan jolivette software engineer apprentice ';
	var words = {};
	var words_attr = [];
	string_handle(lyric);

	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		var c = canvas.getContext('2d'),
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = 'red';
		c.fillStyle = '#5fcf7f';
		c.lineWidth = 5;

		// constructor
		Word = function(key) {
			this.text = key;
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			this.font = words[key] * 8 + 'px arial';
			this.speed = words[key];
		};
		for (key in words) {
			words_attr.push(new Word(key));
		}

		function animation() {
			for (var i = 0; i < words_attr.length; i++) {
				c.font = words_attr[i].font;
				c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
				words_attr[i].width = c.measureText(words_attr[i].text).width;
				c.stroke();
			}
			move();
		}

		function move() {
			for (var i = 0; i < words_attr.length; i++) {
				if (words_attr[i].x > w) {
					words_attr[i].x = -words_attr[i].width;
					words_attr[i].y = Math.random() * h;
				} else {
					words_attr[i].x += words_attr[i].speed;
				}
			}
		}

		setInterval(function() {
			c.clearRect(0, 0, w, h);
			animation();
		}, 24);
	}

	function string_handle(str) {
		var split_str = str.split(' ');
		var word_array = [];
		var word_count = [];
		for (var i = 0; i < split_str.length; i++) {
			check = true;
			for (var j = 0; j <= word_array.length; j++) {
				if (split_str[i] == word_array[j]) {
					word_count[j]++;
					check = false;
					break;
				}
			}
			if (check) {
				word_array.push(split_str[i]);
				word_count.push(1);
			}
		}
		for (var i = 0; i < word_array.length; i++) {
			words[word_array[i]] = word_count[i];
		}
		return words;
	}
};
