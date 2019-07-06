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