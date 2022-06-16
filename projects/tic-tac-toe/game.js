
//The Board
const top1 = document.getElementById("top-1");
const top2 = document.getElementById("top-2");
const top3 = document.getElementById("top-3");
const middle1 = document.getElementById("middle-1");
const middle2 = document.getElementById("middle-2");
const middle3 = document.getElementById("middle-3");
const bottom1 = document.getElementById("bottom-1");
const bottom2 = document.getElementById("bottom-2");
const bottom3 = document.getElementById("bottom-3");

//The buttons
const coinFlip = document.getElementById("coin-flip");
const playAgain = document.getElementById("play-again");
const createRecord = document.getElementById("create-record");

//The Hidden/Unpopulated DIVs
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const rankedScores = document.getElementById("ranked-scores");
const theWinner = document.getElementById("the-winner");

const whoGoesFirst = () => {
    return Math.floor(Math.random() * 2);
}

const markWithX = (square) => {
    square.childNode.innerHTML = "X";
}

const markWithO = (square) => {
    square.childNode.innerHTML = "O";
}

const markBoard = () => {
    //if else statement
}