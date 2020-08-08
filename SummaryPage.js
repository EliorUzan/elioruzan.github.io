function summaryPage(QandR) {

	let i;
	let resultsTableHTML = `
	<table id="resultsTable">
		<tr class="resultsTable_HeadersRow">
			<th>Exercise</th>
			<th>The Exact Answer</th>
			<th>Result</th>
			<th>Your Answer</th>
			<th>Distance from the exact answer</th>
		</tr>`;

	exercise_block = document.getElementById("exercise_block") ;
	exercise_block.innerHTML = resultsTableHTML;  
	let currentExercise_str;
	let currentDistanceFromExactAnswer ;
	for (i = 0; i < QandR.length; i++) {
		currentExercise_str=QandR[i].n1+QandR[i].op+QandR[i].n2;
		currentDistanceFromExactAnswer = Math.round((Math.abs(QandR[i].ans-QandR[i].res)/QandR[i].res)*100) ;
		resultsTableHTML=resultsTableHTML+'\n'+`
			<tr class="resultsTable_dataRow">
				<td>${currentExercise_str}</td>
				<td>${QandR[i].res}</td>
				<td>${QandR[i].CorrectOrWrong}</td>
				<td>${QandR[i].ans}</td>
				<td>${currentDistanceFromExactAnswer}%</td>
			</tr>

			`
	}

	exercise_block.innerHTML = exercise_block.innerHTML+'\n'+`
	</table>`; 
	exercise_block.innerHTML = resultsTableHTML; 
	tryAgainButton = document.createElement("button") 
	tryAgainButton.textContent = 'Try Again';
	tryAgainButton.classList.add("btn");
	tryAgainButton.classList.add("btn-success");
	tryAgainButton.id = "tryAgainButton";
	tryAgainButton.setAttribute('onclick', 'window.location.reload()') ; 
	exercise_block.appendChild(tryAgainButton); 


}