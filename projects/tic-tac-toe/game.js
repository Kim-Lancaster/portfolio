
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

    if(first === 0) {
        coinFlip.style.display = "none";
        whoGoesFirst.innerHTML = "COMPUTER";
        whoGoesFirst.style.width = "170px";
        whoGoesFirst.style.height = "40px"
        whoGoesFirst.style.justifySelf = "center";
        currentPlayer = "computer";
        console.log(`It's the computer's turn`)
    } else {
        coinFlip.style.display = "none";
        whoGoesFirst.innerHTML = "PLAYER";
        whoGoesFirst.style.width = "170px";
        whoGoesFirst.style.height = "40px";
        whoGoesFirst.style.justifySelf = "center";
        currentPlayer = "player";
        console.log(`It's the players turn`)
    }
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
            boardArray[event.target.id - 1] = playerSymbol;
            event.target.innerHTML = playerSymbol;
            event.target.style.fontSize = "5rem";
            checkForWinner(currentPlayer);
            currentPlayer = "computer";
        }
    } else {
        if(squareNotMarked(event.target)){
            tilesClicked += 1;
            boardArray[event.target.id - 1] = computerSymbol;
            event.target.innerHTML = computerSymbol;
            event.target.style.fontSize = "5rem";
            checkForWinner(currentPlayer);
            currentPlayer = "player";
        }
    }
    isItATie();
}

const squareNotMarked = (event) => {
    if(typeof boardArray[event.id - 1] === "number") {
        return true;
    } else {
        return false;
    }
}

const checkForWinner = (player) => {
    let tilesPlayed = [];
    if(player === 'player'){
        let index = boardArray.indexOf(playerSymbol) 
        while(index != -1) {
            tilesPlayed.push(index);
            index = boardArray.indexOf(playerSymbol, index + 1) 
        }
        console.log(`players moves ${tilesPlayed}`)
        //NEED TO CHECK IF ANY OF THE WINNING COMBOS HAVE BEEN ACHIEVED HERE
        //IN SIDE THE IF/ELSE STATEMENT
    } else {
        let index = boardArray.indexOf(computerSymbol)
        while(index != -1) {
            tilesPlayed.push(index);
            index = boardArray.indexOf(computerSymbol, index + 1)
        }
        console.log(`computers moves ${tilesPlayed}`)
        //NEED TO CHECK IF ANY OF THE WINNING COMBOS HAVE BEEN ACHIEVED HERE
        //IN SIDE THE IF/ELSE STATEMENT
    }
}






    
    

