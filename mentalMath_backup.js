
var button = document.getElementById("button") ;
var input = document.getElementById("Answer") ;
var body = document.querySelector("body") ;
var answerLine = document.createElement("h1")
body.appendChild(answerLine) ;
// answerLine.classList.add("answerLine");
// answerLine = getElementByClass("answerLine")


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
} 

function RightOrWrongAnswerCreator () {
		if (input.value==result) {
			answerLine.innerHTML = "Correct!" ;
			
			input.value="" ; 
		} else { 
			answerLine.innerHTML = "Wrong!" ;
			// body.appendChild(answerLine) ;
			input.value="" ; 
		}
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


	var number1_int = Math.floor(getRandomInt(1,100)) ;
	var number2_int = Math.floor(getRandomInt(1,100)) ;
	operation=getRandomInt(1,4) ;

	if (operation===2){
		while (number1_int<number2_int) {
			number2_int=Math.floor(getRandomInt(1,100)) ;
		}
	}



	number1_str=number1_int.toString();
	number2_str=number2_int.toString();


	if (operation===1) {
		operation="+";
		result=number1_int+number2_int ; 
	}
	if (operation===2) {
		operation="-";
		result=number1_int-number2_int ;
	}
	if (operation===3) {
		operation="*";
		result=number1_int*number2_int ;
	}
	if (operation===4) {
		operation="/";
		result=number1_int/number2_int ;
	}


exercise = document.getElementById("exercise");
exercise.innerHTML=number1_str.concat(operation).concat(number2_str);
// result_html = document.getElementById("result");
// result_html.innerHTML=result.toString();

button.addEventListener("click", submitAnswerAfterClick)
input.addEventListener("keypress",submitAnswerAfterEnterPress);





