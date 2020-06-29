//Spieler
var player = 1;
var freeFields=9;

//Felder
var fields = ['','','','','','','','',''];

//Füge EventListener an die Felder 1 bis 9 beim Seitenstart (mit Array und ohne Objektorientierung)
function addEventListeners() {
	document.getElementById('0').addEventListener('click', function () { chooseField(0) });
	document.getElementById('1').addEventListener('click', function () { chooseField(1) });
	document.getElementById('2').addEventListener('click', function () { chooseField(2) });
	document.getElementById('3').addEventListener('click', function () { chooseField(3) });
	document.getElementById('4').addEventListener('click', function () { chooseField(4) });
	document.getElementById('5').addEventListener('click', function () { chooseField(5) });
	document.getElementById('6').addEventListener('click', function () { chooseField(6) });
	document.getElementById('7').addEventListener('click', function () { chooseField(7) });
	document.getElementById('8').addEventListener('click', function () { chooseField(8) });
}

//Die Funktion 'chooseField' prüft, ob das Feld bereits besetzt ist. Falls nicht, wird (abhängig vom Spieler) das entsprechende Zeichen gesetzt.
function chooseField(myField) {
	if(fields[myField]!=''){

	}
	else{
		if (player == 1) {
			fields[myField] = 'X';
			freeFields--;
			checkWinner();
			player = 2;
		} else {
			fields[myField] = 'O';
			checkWinner();
			freeFields--;
			player = 1;
		}
		document.getElementById(myField).innerHTML = fields[myField];
		document.getElementById('player').innerHTML = 'Spieler ' + player;
	}
}

//Die Funktion 'checkWinner' überprüft nach jedem Spielzug, ob es einen Sieger gibt
function checkWinner(){
	if(	fields[0]!='' && fields[0]==fields[1] && fields[1]==fields[2] ||
		fields[3]!='' && fields[3]==fields[4] && fields[4]==fields[5] ||
		fields[6]!='' && fields[6]==fields[7] && fields[7]==fields[8] ||
		fields[0]!='' && fields[0]==fields[3] && fields[3]==fields[6] ||
		fields[1]!='' && fields[1]==fields[4] && fields[4]==fields[7] ||
		fields[2]!='' && fields[2]==fields[5] && fields[5]==fields[8] ||
		fields[0]!='' && fields[0]==fields[4] && fields[4]==fields[8] ||
		fields[2]!='' && fields[2]==fields[4] && fields[4]==fields[6] ){
		document.getElementById('winnertext').innerHTML = 'Spieler ' + player + ' hat gewonnen!';
		document.getElementById('winner').setAttribute('style', 'display: block;');
	}
	else if(freeFields==0){
		document.getElementById('winnertext').innerHTML ='Unentschie-<br>den!';
		document.getElementById('winner').setAttribute('style', 'display: block;');
	}
}