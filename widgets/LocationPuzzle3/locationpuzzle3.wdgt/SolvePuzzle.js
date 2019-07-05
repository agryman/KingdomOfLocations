
var answer = "EXITSTAGERIGHT";

var cluenames = [
	"Elephant", 
	"Shark", 
	"Ice cream cone", 
	"Ice cream cone", 
	"Guitar",
	"Telephone",
	"Telephone",
	"Guitar",
	"Rose",
	"Hammer",
	"Apple",
	"Xerox machine",
	"Elephant",
	"Telephone",
	"blank"
];

var clueimagenames = [
	"LeftWingRDS",
	"LWingQuarterRDS",
	"BLWQandLHUS",
	"LeftHalfC",
	"LCentreQuarterLUS",
	"BLCQandCC",
	"CentreUS",
	"BCandRCQDS",
	"RCentreQuarterRUS",
	"BRCQandRHDS",
	"RightHalfLC",
	"RWingQuarterUS",
	"BRWQandRWingDS",
	"RightWingLC",
	"blank"
];

var blankClue = 14;

var clueimages = new Array(15);

for(var clue = 0; clue < clueimages.length; clue++) {
	
	clueimages[clue] = new Image();
	clueimages[clue].src = "images/" + clueimagenames[clue] + ".jpg";
}

function writeText(txt) {
	document.getElementById("cluename").innerHTML=txt;
}

function setImage(clue) {

	document.clueimage.src = clueimages[clue].src;
}

function showclue(clue) {

	writeText("The " + cluenames[clue] + " is at location ");
	setImage(clue);
}

function clearclue() {

	writeText("Tap an item to get its name and location sign.");
	setImage(blankClue);

}

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
		writeText("Congratulations! You solved the puzzle.");
		setImage(blankClue);
	}
}

function resetPuzzle() {
	for (var i = 0; i < answer.length; i++) {

		var id = "letter-" + i;
		var input = document.getElementById(id);
		input.value = "";
		input.style.color = "black"
	}

	clearclue();
}