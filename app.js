var color = ['red', 'green', 'yellow', 'orange'];
var tmp = 0;

function changeBackground() {
	document.getElementById('background').style.backgroundColor = color[Math.floor(Math.random()*4)];
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

