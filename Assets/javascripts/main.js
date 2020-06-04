//Declaration of variables

var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const sccoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Creating a random function to generate computer choice

function computerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

//Defined 3 functions for win, lose, & draw

function win(userInput, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 's') {
        result_p.innerHTML = `Computer chose Scissors. You Win!`;
    }
    else if (userInput === 'p' && compChoice === 'r') {
        result_p.innerHTML = `Computer chose Rock. You Win!`;
    }
    else if (userInput === 's' && compChoice === 'p') {
        result_p.innerHTML = `Computer chose Paper. You Win!`;
    }
    // Using a delay of 350ms after showing background color
    document.getElementById(userInput).classList.add('win');
    setTimeout(function () { document.getElementById(userInput).classList.remove('win'); }, 350);
}

function Lose(userInput, compChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'p') {
        result_p.innerHTML = "Computer chose Paper. You Lost.";
    }
    else if (userInput === 'p' && compChoice === 's') {
        result_p.innerHTML = `Computer chose Scissors. You Lost.`;
    }
    else if (userInput === 's' && compChoice === 'r') {
        result_p.innerHTML = `Computer chose Rock. You Lost.`;
    }
    document.getElementById(userInput).classList.add('lose');
    setTimeout(function () { document.getElementById(userInput).classList.remove('lose'); }, 350);

}

function Draw(userInput, compChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'r') {
        result_p.innerHTML = `Computer chose Rock. It's a Draw.`;
    }
    else if (userInput === 'p' && compChoice === 'p') {
        result_p.innerHTML = `Computer chose Paper. It's a Draw.`;
    }
    else if (userInput === 's' && compChoice === 's') {
        result_p.innerHTML = `Computer chose Scissors. It's a Draw.`;
    }
    document.getElementById(userInput).classList.add('draw');
    setTimeout(function () { document.getElementById(userInput).classList.remove('draw'); }, 350);
}

// Getting called by main function with info of user choice
// Calls function Win, Lose, or Draw .

function game(userInput) {
    const compChoice = computerChoice();
    const UserChoice = userInput + compChoice;
    if (UserChoice === "rs" || UserChoice === "pr" || UserChoice === "sp") {
        win(userInput, compChoice);
        console.log("Win");
    }
    else if (UserChoice === "rp" || UserChoice === "ps" || UserChoice === "sr") {
        Lose(userInput, compChoice);
        console.log("Lose");
    }
    else if (UserChoice === "rr" || UserChoice === "pp" || UserChoice === "ss") {
        Draw(userInput, compChoice);
        console.log("Draw");
    }
}

// Declaration of main function and calling it
// Initialiser of game

function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })
    paper_div.addEventListener('click', function () {
        game('p');
    })
    scissors_div.addEventListener('click', function () {
        game('s');
    })
}

main();