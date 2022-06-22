
//The Board
const allTiles = ['top-1', 'top-2', "top-3", "middle-1", "middle-2", "middle-3", "bottom-1", "bottom-2", "bottom-3"];

const tiles = [];

allTiles.forEach((t) => {
    tiles.push(document.getElementById(t));
})

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

//Whose turn is it at start
let playersTurn = false;
// let computersTurn = false;

//Who is X and O
let playerSymbol = "X";
let computerSymbol = "O";

//Misc
const tilesClicked = 0;
let eventTile = ""


//////////////GAME LOGIC BELOW///////////////////////////
const removableFunc = event => {
    if(playersTurn){
        event.target.innerHTML = playerSymbol;
        event.target.style.fontSize = "5rem";
        eventTile = event.target;
        playersTurn = false;
    }else{
        event.target.innerHTML = computerSymbol;
        event.target.style.fontSize = "5rem";
        playersTurn = true;
    }
    
    console.log(eventTile);
}

tiles.forEach(tile => {
    tile.addEventListener('click', removableFunc);
})

const startGame = () => {

}

//END GAME LOGIC////////////////////////////



//Sets up who goes first by random selection/////
const pickFirst = () => {
    return Math.floor(Math.random() * 2);
}
const whoseTurn = () => {
        
    let first = pickFirst();

    if(first === 0) {
        whoGoesFirst.innerHTML = "COMPUTER";
        whoGoesFirst.style.width = "170px";
        whoGoesFirst.style.height = "40px"
        whoGoesFirst.style.justifySelf = "center";
        computersTurn = true;
        console.log(`computer's turn ${computersTurn}`)
    } else {
        whoGoesFirst.innerHTML = "PLAYER";
        whoGoesFirst.style.width = "170px";
        whoGoesFirst.style.height = "40px";
        whoGoesFirst.style.justifySelf = "center";
        playersTurn = true;
        console.log(`player's turn ${playersTurn}`)
    }
    startGame();
}
coinFlip.onclick = whoseTurn;
//END WHO GOES FIRST//////////////////////////



    
    

