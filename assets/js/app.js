var tableBombIt = [
					' ',
					'*',
					'2',
					' ',
					'/n',
					' ',
					' ',
					'*',
					'1',
					'/n',
					'1',
					'*',
					' ',
					' ',
					'/n',
					' ',
					'3',
					'*',
					' '
					]


var containerBombIt = document.getElementById('container-bomb-it');
var bombIt = document.getElementById('bomb-it');

var drawGameZone = function(array) {
	for (var i = 0; i < tableBombIt.length; i++) {
		var cell = document.createElement('div');
		var enter = document.createElement('br');

		if (array[i] == '1' || array[i] == '2' || array[i] == '3') {
			cell.className = 'number';
			cell.innerText = array[i];
			cell.onclick = showNumber;
		} else if (array[i] == ' ') {
			cell.className = 'emptySpace';
			cell.onclick = changeColor;
		} else if (array[i] == '*') {
			cell.className = 'bomb';
			cell.onclick = boom;
		} else {
			bombIt.appendChild(enter);
			continue;
		}

		bombIt.appendChild(cell);
	}
	addBtnRestart();
};

var showNumber = function(){
	this.className = 'number numberShow'
}

var changeColor = function() {
	this.style.backgroundColor = '#888';
}

var boom = function() {
	containerBombIt.removeChild(bombIt);
	containerBombIt.innerHTML = '<img src="assets/img/boom.gif" alt="boom" width="320px"><br>'
	addBtnRestart();
};

var addBtnRestart = function() {
	var btnRestart = document.createElement('button');
	btnRestart.innerText = 'Restart!!';
	btnRestart.addEventListener('click', reStart);
	containerBombIt.appendChild(btnRestart);
}

var reStart = function() {
	location.reload();
}

drawGameZone(tableBombIt);