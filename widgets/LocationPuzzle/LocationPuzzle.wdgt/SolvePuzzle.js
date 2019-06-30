
var answer = "EXITSTAGERIGHT";

function check(input, solution) {

	var entry = input.value;

	// alert("You entered: " + entry + "\nThe solution is: " + solution);
	
	entry = entry.toUpperCase();
	input.value = entry;
	
	var color = "";
	if (entry == solution) {
		color = "limegreen";
	} else {
		color = "red";
	}
	// input.setAttribute("class", classAttr);
	input.style.color = color;
	input.style.fontWeight = "bold";
	
	checkAnswer();
}

function checkAnswer() {
	var solved = true;
	for (var i = 0; i < answer.length; i++) {
	
		var letter = answer.charAt(i);
		var id = "letter-" + i;
		var input = document.getElementById(id);
		var value = input.value;
		value = value.toUpperCase();
		solved = letter == value;
		if (!solved) break;
	}
	
	if(solved) {
		alert("Congratulations! You solved the puzzle.");
	}
}