
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
const hiddenComputer = document.getElementById("hidden-computer");
const hiddenPlayer = document.getElementById("hidden-player");

//Whose turn is it at start
let playersTurn = false;
let computersTurn = false;

//Who is X and O
let playerSymbol = "X";
let computerSymbol = "O";

//Misc
const tilesClicked = 0;
let eventTile = null;
const occupiedTiles = [];


//////////////GAME LOGIC BELOW///////////////////////////

//telling the square what to do when clicked
const clickEvent = event => {
    if(playersTurn){
        event.target.innerHTML = playerSymbol;
        event.target.style.fontSize = "5rem";
        eventTile = event.target;
        switchPlayer();
    }else{
        event.target.innerHTML = computerSymbol;
        event.target.style.fontSize = "5rem";
        eventTile = event.target
    }
    
} ///might need to switch form innerHTML to innerText above


//Adding the click event to all squares on the board
const activateSquares = () =>{
    tiles.forEach(tile => {
        tile.addEventListener('click', clickEvent);
    })
}

const switchPlayer = () => {
    if(eventTile){
        occupiedTiles.push(eventTile);
        eventTile.removeEventListener('click', clickEvent);
    }
    if(playersTurn && eventTile){
        playersTurn = false;
        switchPlayer();
    }
    else {
        while(!playersTurn){//O is trying to mark an already filled spot and then forfiting it's turn
            let choice = Math.floor(Math.random() * 9);
            console.log(` choice is ${choice} and it contains ${tiles[choice].text}`);
            if(tiles[choice].text === undefined){//this
                tiles[choice].click();
                playersTurn = true;
            }
        }
    }
}

//Sets up who goes first by random selection/////
const pickFirst = () => {
    return Math.floor(Math.random() * 2);
}
const whoseTurn = () => {
        
    let first = pickFirst();

    if(first === 0) {
        coinFlip.style.visibility = "hidden";
        hiddenComputer.innerHTML = "COMPUTER";
        hiddenComputer.style.width = "170px";
        hiddenComputer.style.height = "40px"
        hiddenComputer.style.justifySelf = "center";
        playersTurn = false;
        console.log(`player's turn ${computersTurn}`)
    } else {
        coinFlip.style.visibility = "hidden";
        hiddenPlayer.innerHTML = "PLAYER";
        hiddenPlayer.style.width = "170px";
        hiddenPlayer.style.height = "40px";
        hiddenPlayer.style.justifySelf = "center";
        playersTurn = true;
        console.log(`player's turn ${playersTurn}`)
    }
    activateSquares()
    switchPlayer();
}
coinFlip.onclick = whoseTurn;
//END WHO GOES FIRST//////////////////////////



    
    

