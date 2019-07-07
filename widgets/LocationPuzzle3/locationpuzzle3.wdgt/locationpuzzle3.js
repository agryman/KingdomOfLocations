/*

    This puzzle is intended to help players learn how to read Benesh Movement Notation stage location signs.
    In this puzzle, the player tries to guess a secret message using clues stored at various stage locations.
    The secret message is a short sentence, e.g. "EXIT STAGE RIGHT".

    The puzzle consists of three main areas:
    - The stage plan
    - The status message
    - The answer form

    The stage plan contains a set of images, e.g. Elephant, Telephone, at various locations.
    The first letter of the name of the image provides one letter of the secret message,
    e.g. E for Elephant, T for Telephone.

    The status line displays helpful information, e.g. "Congratulations! You solved the puzzle."

    The answer form is where the player builds up the solution to the puzzle.
    It contains a set of cells, one for each letter in the secret message, like in a crossword puzzle.
    The cells are grouped into the words of the secret message.
    There is a location sign below each cell which gives the clue for the corresponding letter.

    The player gradually builds up the solution, one letter at a time, in the answer form.

    The
    The letters are displayed in answer cells.
    Initially, the cells are empty and no cell has the input focus.
    The player must click or tap a cell to give it the focus.
    When a cell has the focus it is highlighted.
    Below each cell is a location sign which gives a clue for the answer letter.
    Each location on the stage that corresponds to a clue contains an image.
    The first letter of the name of the image is the answer letter.
    The player must interpret the location sign and click or tap the corresponding location on the stage.
    The first letter of the name of the image where the player taps or clicks is copied into the cell that has the focus.


    State Model:

    The control has the following state:

     - secret_message: The secret message of the puzzle.
        A constant non-empty string of non-blank characters.
        e.g. secret_message = "EXITSTAGERIGHT"

     - n_cells: The number of cells, one per character of the secret_message.
        A constant positive integer - set this to secret_message.length
        e.g. n_cells = 14

     - cells: The cells.
        A constant array of cells, one for each character in the secret_message.

     - focus_cell_index: The index of the cell that has the focus.
        A variable non-negative integer - initialize this to 0.

     - is_solved: Is the puzzle solved?
        A variable boolean. - compute this as cells[0].is_correct && ... && cells[n_cells - 1].is_correct

    A cell has the following state:

    - cell_index: The index of the cell within the secret message.
        A constant non-negative integer - set this to the array index of the
        answer within the secret_message

    - cell_number: The number of the cell within the secret message.

    - answer: The correct answer.
        A constant character - set this to the secret_message[cell_index]

    - guess: The current guess.
        A variable character - initialize this to a blank

    - has_focus: Does this cell have the input focus?
        A variable boolean - compute this as cell_index == focus_cell_index

    - is_correct: Is the guess correct?
        A variable boolean - compute this as (answer == guess)
*/

/*
The following variables define the puzzle:
message
clues
 */

// the location coordinates of the letters on the stage plan, e.g. 71 means column 7, row 1
// e.g. the clue for cell-4 is in clues[3]

var clues = [
    11, 85, 33, 93,     // EXIT
    22, 43, 73, 44, 81, // STAGE
    64, 25, 62, 71, 55  // RIGHT
];

// the stage plan is an image map
// each area of the image map has an image
// the first letter of the area name is the corresponding letter of the secret message
/*
var area_names = [
    "Elephant-0", "Xerox-machine-11", "Ice-cream-cone-3", "Telephone-13",   // EXIT
    "Shark-1", "Telephone-5", "Apple-10", "Guitar-4", "Elephant-12",        // STAGE
    "Rose-8", "Ice-cream-cone-2", "Guitar-7", "Hammer-9", "Telephone-6"     // RIGHT
];
*/


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

var unsolved_message = "Tap an item to get its name and location sign.";
var solved_message = "Congratulations, you've solved the puzzle!";

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

    if(isPuzzleSolved()) {

    } else {
        writeText("The " + cluenames[clue] + " is at location ");
        setImage(clue);
    }
}

function clearclue() {

    var message = isPuzzleSolved() ? solved_message : unsolved_message;
    writeText(message);
    setImage(blankClue);

}

// the secret message
var secret_message = "EXITSTAGERIGHT";

// This function is NOT used in the Location Puzzle.
function checkPuzzle() {

    // compare secret message to clues

    if (secret_message.length !== clues.length) {
        alert("Puzzle Definition Error: secret message length " + secret_message.length +
            " differs from clues length " + clues.length);
    }

    for (var i = 0; i < clues.length; i++) {

        var messageLetter = secret_message.charAt(i);

        // get location letter from HTML document
        var cr = clues[i];
        var locationId = locationNumberToId(cr);
        var locationSelector = "#" + locationId;

        // var locationLetter = $(locationSelector).text();
        var locationName = $(locationSelector).attr("name");
        var locationLetter = locationName && locationName.length > 0 ? locationName[0] : "?";

        if (locationLetter !== messageLetter) {
            alert("Puzzle Definition Error: secret_message[" + i + "] = " + messageLetter +
                " differs from text at " + locationSelector + " = " + locationLetter);
        }
    }
}

/*
The following variables define the game state:
clicks
focusCellNumber
 */

// the last location that the user clicked, 0 means not yet clicked
// e.g. the last location clicked when cell-4 had the focus is stored in clicks[3]
var clicks = new Array(clues.length);

// the number of the answer cell that has the click focus, 0 means the puzzle is solved
var focusCellNumber;

function saveGameState() {

    var gameState = {
        focusCellNumber : focusCellNumber,
        clicks : clicks
    };
    localStorage.gameState = JSON.stringify(gameState);
}

function loadGameState() {

    if(localStorage.gameState) {

        var gameState = JSON.parse(localStorage.gameState);
        focusCellNumber = gameState.focusCellNumber;
        clicks = gameState.clicks;
        displayGameState();

    } else {

        restartGameState();
    }
}

function restartGameState() {

    focusCellNumber = 1;
    for(var i = 0; i < clicks.length; i++) {
        clicks[i] = 0;
    }

    saveGameState();
    displayGameState();
}

function displayGameState() {

    displayStatus();
    for (var n = 1; n <= clicks.length; n++) {
        displayAnswerCellByNumber(n);
    }
}

function displayStatus() {

    clearclue();
}

function displayAnswerCellByNumber(n) {

    displayAnswerByNumber(n);
    highlightCellByNumber(n, n === focusCellNumber);
}

function displayAnswerByNumber(n) {

    var i = n - 1;

    var answerText;
    var answerFill;

    var cr = clicks[i];
    if (cr === 0) {

        answerText = "?";
        answerFill = "grey";

    } else {

        var locationSelector = "#" + locationNumberToId(cr);
        var locationName = $(locationSelector).attr("name");
        answerText = locationName[0];
        answerFill = isCellNumberSolved(n) ? "green" : "red";
    }

    var answerSelector = "#" + answerNumberToId(n);
    $(answerSelector).text(answerText);
    $(answerSelector).attr("fill", answerFill);
}

function isCellNumberSolved(n) {

    var i = n - 1;
    return clues[i] === clicks[i];
}

/*
    Computes the next valid cell number after n that can assume the click focus.
*/
function nextFocusNumber() {

    // find the next incorrect click
    for (var i = 0; i < clues.length; i++) {
        var n = 1 + (focusCellNumber + i) % clues.length;
        if (!isCellNumberSolved(n)) return n;
    }

    // all cells are solved so the puzzle is solved
    return 0;
}

function isPuzzleSolved() {
    return nextFocusNumber() === 0;
}

function highlightCellById(id, state) {

    // e.g. $("#cell-4").attr({"stroke" : "blue", "stroke-width" : "8"})

    var selector = "#" + id;

    var stroke = state ? "blue" : "black";
    var strokeWidth = state ? "8" : "4";

    $(selector).attr({
        "stroke" : stroke,
        "stroke-width" : strokeWidth
    });
}

function highlightCellByNumber(cellNumber, state) {
    highlightCellById(cellNumberToId(cellNumber), state);
}

function numberFromId(prefix, id) {
    return Number(id.substring(prefix.length));
}

function numberToId(prefix, n) {
    return prefix + n;
}

var answerIdPrefix = "answer-";

function answerNumberFromId(id) {
    return numberFromId(answerIdPrefix, id);
}

function answerNumberToId(n) {
    return numberToId(answerIdPrefix, n);
}

var cellIdPrefix = "cell-";

function cellNumberFromId(id) {
    return numberFromId(cellIdPrefix, id);
}

function cellNumberToId(n) {
    return numberToId(cellIdPrefix, n);
}

/*
function cellNumberFromLocationId(id) {
    return cellNumberFromLocationNumber(locationNumberFromId(id));
}
*/

/*
function cellNumberFromLocationNumber(cr) {

    // search the clues array for cr
    for (var i = 0; i < clues.length; i++) {
        if (clues[i] === cr) {
            return i + 1;
        }
    }

    alert("Programming Error: Unable to find location " + cr + " in clues[].");

    return 0;
}
*/

// locations ids are like "location-9-5"

var locationIdPrefix = "location-";

function locationColumnFromId(id) {
    var start = locationIdPrefix.length;
    return Number(id.substr(start, 1));
}

function locationRowFromId(id) {
    var start = locationIdPrefix.length + 2;
    return Number(id.substr(start, 1));
}

function locationNumbersToId(c, r) {
    return locationIdPrefix + c + "-" + r;
}

function locationNumberToId(cr) {

    var c = Math.floor(cr / 10);
    var r = cr % 10;

    return locationNumbersToId(c, r);
}

function locationNumberFromId(id) {
    // e.g. id = "location-9-5
    var c = locationColumnFromId(id);   // e.g. c = 9
    var r = locationRowFromId(id);      // e.g. r = 5

    return 10 * c + r;                  // e.g. cr = 95
}

function changeFocusCellByNumber(cellNumber) {

    // ignore clicks on solved cells
    if(isCellNumberSolved(cellNumber)) return;

    // the clicked cell already has the focus so do nothing
    if (cellNumber === focusCellNumber) return;

    // change the focus

    highlightCellByNumber(focusCellNumber, false);
    highlightCellByNumber(cellNumber, true);

    focusCellNumber = cellNumber;
    saveGameState();
}

function changeFocusCellById(cellId) {
    changeFocusCellByNumber(cellNumberFromId(cellId));
}

$(function(){

    // check that the puzzle definition is consistent
    checkPuzzle();

    // load the current game state from local storage
    loadGameState();

    // restart the puzzle when the user clicks the "Start Over" button
    $("#start-over-button").click(restartGameState);

    // highlight the answer cell on click
    $(".cell").click(function(event) {
        changeFocusCellById(event.target.id);
    });

    $(".answer").click(function(event) {
        var n = answerNumberFromId(event.target.id);
        changeFocusCellByNumber(n);
    });

    $(".location").click(function(event) {

        // ignore clicks if the puzzle is solved
        if (isPuzzleSolved()) return;

        var locationId = event.target.id;

        // save the click and update the answer
        clicks[focusCellNumber - 1] = locationNumberFromId(locationId);
        displayAnswerByNumber(focusCellNumber);

        if (isCellNumberSolved(focusCellNumber)) {

            // the current cell is solved to move the focus
            highlightCellByNumber(focusCellNumber, false);
            focusCellNumber = nextFocusNumber();
            if (focusCellNumber !== 0) {

                // highlight the new focus cell
                highlightCellByNumber(focusCellNumber, true);
            } else {

                // the puzzle is solved to display the congratulations message
                displayStatus();
            }
        }

        saveGameState();
    });
});
