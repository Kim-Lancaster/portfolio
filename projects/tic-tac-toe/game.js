
//The Board
const allTiles = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const tiles = [];

allTiles.forEach((t) => {
    tiles.push(document.getElementById(t));
})

//The Board Array
const boardArray = Array.from(Array(9).keys())

//Winning Tile Combos
const winningCombos = [
    [0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

//The buttons
const coinFlip = document.getElementById("coin-flip");
const playAgain = document.getElementById("play-again");
const createRecord = document.getElementById("create-record");

//The Hidden/Unpopulated DIVs
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const rankedScores = document.getElementById("ranked-scores");
const theWinner = document.getElementById("the-winner");
const whoGoesFirst = document.getElementById("who-goes-first");
const hiddenComputer = document.getElementById("hidden-computer");
const hiddenPlayer = document.getElementById("hidden-player");

//Whose turn is it at start
let currentPlayer = "";

//Who is X and O
let playerSymbol = "X";
let computerSymbol = "O";

//Misc
let tilesClicked = 0;



//////////////GAME LOGIC BELOW///////////////////////////


//Sets up who goes first by random selection/////
const pickFirst = () => {
    return Math.floor(Math.random() * 2);
}
const whoseTurn = () => {
        
    let first = pickFirst();
    coinFlip.style.display = "none";
    if(first === 0) {
        whoGoesFirst.innerHTML = "COMPUTER";
        currentPlayer = "computer";
    } else {
        whoGoesFirst.innerHTML = "PLAYER";
        currentPlayer = "player";
    }
    whoGoesFirst.style.width = "170px";
    whoGoesFirst.style.height = "40px"
    whoGoesFirst.style.justifySelf = "center";
    activateSquares();
}
coinFlip.onclick = whoseTurn;


//Adding the click event to all squares on the board
const activateSquares = () =>{
    tiles.forEach(tile => {
        tile.addEventListener('click', gamePlay);
    })
}

//telling the square what to do when clicked
const gamePlay = event => {
    if(currentPlayer === "player"){
        if(squareNotMarked(event.target)){
            tilesClicked += 1;
            markSquare(event.target, playerSymbol);
            let playersSquares = squaresPlayedByCurrentPlayer(currentPlayer);
            
            currentPlayer = "computer";
        }
    } else {
        if(squareNotMarked(event.target)){
            tilesClicked += 1;
            markSquare(event.target, computerSymbol);
            let computersSquares = squaresPlayedByCurrentPlayer(currentPlayer);
            
            currentPlayer = "player";
        }
    }
    checkForTie();
}

//Checking if square is alread marked or not
const squareNotMarked = (event) => {
    if(typeof boardArray[event.id - 1] === "number") {
        return true;
    } else {
        return false;
    }
}

//Marking the empty squares
const markSquare = (event, symbol) => {
    boardArray[event.id - 1] = symbol;
    event.innerHTML = symbol;
    event.style.fontSize = "5rem";
}

//Create and Array which square is maked by which player
const squaresPlayedByCurrentPlayer = (player) => {
    if(tilesClicked < 5){
        return;
    }
    let tilesPlayed = [];
    if(player === 'player'){
        let index = boardArray.indexOf(playerSymbol) 
        while(index != -1) {
            tilesPlayed.push(index);
            index = boardArray.indexOf(playerSymbol, index + 1) 
        }
    } else {
        let index = boardArray.indexOf(computerSymbol)
        while(index != -1) {
            tilesPlayed.push(index);
            index = boardArray.indexOf(computerSymbol, index + 1)
        }
    }
    return tilesPlayed
}

//RETURNS a winning array from currentPlayer's moves
/////////DOES NOT FUCKING WORK AM I RETARDED THE STRUGGLE IT SHOULD BE THIS HARD
const checkForWin = (tileArray) => {
    let matching = 0;
    for(let i = 0; i < winningCombos.length; i++){
        for(let j = 0; j < winningCombos[i].length; j++){
            if(tileArray.includes(winningCombos[i][j])){
                matching++;
            } else {
                i++
            }
            if(matching == 3){ 
                console.log(winningCombos[i])
                return winningCombos[i];
            }
        }
        matching = 0;
    }
    return null;
}






    
    

