function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
} 

function RightOrWrongAnswerCreator () {
		if (input.value==result) {
			answerLine.innerHTML = "Correct!" ;
		} else { 
			answerLine.innerHTML = "Wrong!" ;
		}
		input.value="";
		var number1_int = Math.floor(getRandomInt(1,100)) ;
		var number2_int = Math.floor(getRandomInt(1,100)) ;
		getRandomExercise(number1_int,number2_int);
	}


function submitAnswerAfterClick() {
	if (input.value!="") { 
		usersAnswer=parseInt(input.value) ; 
		RightOrWrongAnswerCreator() ;
	}
}

function submitAnswerAfterEnterPress() {
	if (input!="" && event.keyCode===13) {
		RightOrWrongAnswerCreator () ;
	}
}

// Randomizing the Exrecise 
function getRandomExercise (number1_int,number2_int) {
	operation=getRandomInt(1,5) ;

	if (operation===2){
		while (number1_int<number2_int) {
			number2_int=Math.floor(getRandomInt(1,100)) ;
		}
	}

	if (operation===4) {
		number3_int=number2_int*number1_int;
		number3_str=number3_int.toString();

	}

	number1_str=number1_int.toString();
	number2_str=number2_int.toString();
	exercise = document.getElementById("exercise");

	if (operation===1) {
		operation="+";
		result=number1_int+number2_int ;
		exercise.innerHTML=number1_str.concat(operation).concat(number2_str); 
	}
	if (operation===2) {
		operation="-";
		result=number1_int-number2_int ;
		exercise.innerHTML=number1_str.concat(operation).concat(number2_str); 
	}
	if (operation===3) {
		operation="*";
		result=number1_int*number2_int ;
		exercise.innerHTML=number1_str.concat(operation).concat(number2_str); 
	}
	if (operation===4) {
		operation="/";
		result=number3_int/number1_int ;
		exercise.innerHTML=number3_str.concat(operation).concat(number1_str); 
	}



}

var button = document.getElementById("button") ;
var input = document.getElementById("Answer") ;
var body = document.querySelector("body") ;
var answerLine = document.createElement("h1")
body.appendChild(answerLine) ;

var number1_int = Math.floor(getRandomInt(1,100)) ;
var number2_int = Math.floor(getRandomInt(1,100)) ;
var number3_int ;
getRandomExercise(number1_int,number2_int);

button.addEventListener("click", submitAnswerAfterClick)
input.addEventListener("keypress",submitAnswerAfterEnterPress);





