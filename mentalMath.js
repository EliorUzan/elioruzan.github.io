function session() {
	
	function sessionEnd () {
			exercise.textContent = "The Session has Ended :( "
			exerciseBlock.removeChild(input);
			exerciseBlock.removeChild(button) ;  
			exerciseBlock.removeChild(answerLine) ; 
	}


	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	} 

	function RightOrWrongAnswerCreator () {
			// questionSummary.ans = input.value ; 
			if (input.value<=result*1.05 && input.value>=result*0.95) {
				answerLine.textContent = "Correct!" ;
				// questionSummary.CorrectOrWrong = "Correct"; 
			} else { 
				answerLine.textContent = "Wrong!" ;
				// questionSummary.CorrectOrWrong = "Wrong" ; 
			}
			// console.log(questionSummary); 
			// questionsAndResults.push(questionSummary) ; 
			input.value="";
			var number1_int = Math.floor(getRandomInt(1,100)) ;
			var number2_int = Math.floor(getRandomInt(1,100)) ;
			getRandomExercise(number1_int,number2_int); // The end of the process - A new exercise is being generated 

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


	function getRandomExercise (number1_int,number2_int) {
		operation=getRandomInt(1,5) ;

		number1_str=number1_int.toString();
		number2_str=number2_int.toString();
		exercise = document.getElementById("exercise");


		switch (operation) {  // Mapping 4 numbers to 4 Math Operation + getting result of the exercise 
			case 1:
				operation="+";
				result=number1_int+number2_int ;
				exercise.innerHTML=number1_str+operation+number2_str; 
				break ;
			
			case 2:
				while (number1_int<number2_int) { //This loop makes sure that n1>n2 so we dont get negative numbers as results
					number2_int=Math.floor(getRandomInt(1,100)) ;
				}
				operation="-";
				result=number1_int-number2_int ;
				number2_str=number2_int.toString(); //re-defining number2_str because it might have changed due to the "while" loop
				exercise.innerHTML=number1_str+operation+number2_str;  
				break ;
			
			case 3:
				operation="*";
				result=number1_int*number2_int ;
				exercise.innerHTML=number1_str+operation+number2_str; 
				break ;
			
			case 4:
				number2_int=number2_int*number1_int; // In order to get only integers a exercise results, we multiply n1*n2=n3 to get n3 and than divide n3/n1=n2 to get n2 as the answer
				number2_str=number2_int.toString();
				operation="/";
				result=number2_int/number1_int ;
				exercise.innerHTML=number2_str+operation+number1_str; 
				break ;
		// questionSummary.op = operation ; 
		// questionSummary.res = result ; 
		}
	}


	// For the first time the page runs: 
	exerciseBlock.removeChild(startSession); 
	exerciseBlock.removeChild(goodLuck);  

	var input = document.createElement("INPUT") ;
	input.setAttribute("type", "text"); 
	var button = document.createElement("button") ;
	button.textContent = 'Enter'; 
	var answerLine = document.createElement("h1")

	exerciseBlock.appendChild(input) ;
	exerciseBlock.appendChild(button) ;
	exerciseBlock.appendChild(answerLine) ;

	var number1_int = Math.floor(getRandomInt(1,100)) ;
	// questionSummary.n1 = number1_int ;
	var number2_int = Math.floor(getRandomInt(1,100)) ;
	// questionSummary.n2 = number2_int ;
	getRandomExercise(number1_int,number2_int); // Generates a random exercise 

	button.addEventListener("click", submitAnswerAfterClick) //upon click - submit
	input.addEventListener("keypress",submitAnswerAfterEnterPress); //upon "Enter" press - submit
	setTimeout(sessionEnd,10000) ;



} 

var goodLuck = document.getElementById("goodLuck") ;
var exerciseBlock = document.getElementsByClassName("exercise_block")[0];
startSession=document.getElementById("StartSession") ;
startSession.addEventListener("click",session); 
// var questionsAndResults =[] ;
// var questionSummary = {
// 	n1: 0,
// 	n2: 0, 
// 	op: "+",
// 	ans: 0, 
// 	res: 0, 
// 	CorrectOrWrong: "Correct"
// }