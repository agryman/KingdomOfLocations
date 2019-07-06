
var answer = "EXITSTAGERIGHT";

var cluenames = [
	"Elephant",			// Elephant-0
	"Shark", 			// Shark-1
	"Ice cream cone", 	// Ice-cream-cone-2
	"Ice cream cone", 	// Ice-cream-cone-3
	"Guitar",			// Guitar-4
	"Telephone",		// Telephone-5
	"Telephone",		// Telephone-6
	"Guitar",			// Guitar-7
	"Rose",				// Rose-8
	"Hammer",			// Hammer-9
	"Apple",			// Apple-10
	"Xerox machine",	// Xerox-machine-11
	"Elephant",			// Elephant-12
	"Telephone",		// Telephone-13
	"blank"
];

var clueimagenames = [
	"LeftWingDS2R.svg", 			// "LeftWingRDS.jpg",
	"LeftWingQuarterDS3.svg", 		// "LWingQuarterRDS.jpg",
	"LWQ_LH_US2.svg",				// "BLWQandLHUS.jpg",
	"LeftHalfMS.svg",				// "LeftHalfC.jpg",
	"LeftCentreQuarterUS3L.svg",	// "LCentreQuarterLUS.jpg",
	"LCQ_C_MS.svg",					// "BLCQandCC.jpg",
	"CentreUS2.svg", 				// "CentreUS.jpg",
	"RCQ_C_DS3.svg",				// "BCandRCQDS.jpg",
	"RightCentreQuarterUS3R.svg",	// "RCentreQuarterRUS.jpg",
	"RCQ_RH_DS2.svg",				// "BRCQandRHDS.jpg",
	"RightHalfMSl.svg",				// "RightHalfLC.jpg",
	"RightWingQuarterUS2.svg",		// "RWingQuarterUS.jpg",
	"RWQ_RW_DS2.svg",				// "BRWQandRWingDS.jpg",
	"RightWingMSL.svg",				// "RightWingLC.jpg",
	"blank.jpg"
];

var blankClue = 14;

var clueimages = new Array(15);

for(var clue = 0; clue < clueimages.length; clue++) {
	
	clueimages[clue] = new Image();
	clueimages[clue].src = "images/" + clueimagenames[clue];
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

function resetPuzzle() {
	clearclue();
}