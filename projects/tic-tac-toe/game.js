
//The Board
const allTiles = ['top-1', 'top-2', "top-3", "middle-1", "middle-2", "middle-3", "bottom-1", "bottom-2", "bottom-3"];

const tile = [];

allTiles.forEach((t) => {
    tile.push(document.getElementById(t));
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
let computersTurn = false;

//Who is X and O
let playerSymbol = "X";
let computerSymbol = "O";

//Misc
const tilesClicked = 0;

//////////////GAME LOGIC BELOW///////////////////////////


const gameLoop = (event) => {
    while(tilesClicked < 10){
        let move = Math.floor(Math.random() * 9);
        if(playersTurn && event.target.innerHTML === '?'){
                event.target.innerHTML = playerSymbol;
                event.target.style.fontSize = "5rem";
                playersTurn = false;
                computersTurn = true
                tilesClicked++; 
            }
        if(computersTurn && tile[move].innerHTML === '?'){
            tile[move].innerHTML = computerSymbol;
            tile[move].style.fontSize = "5rem";
            computersTurn = false; 
            playersTurn = true;
            tilesClicked++;    
        }
    }
}
//Game play
const gamePlay = () => {
    tile.forEach(t => {
        t.addEventListener("click", event => { 
            gameLoop(event);
        }); 
    });
}

//Sets up who goes first by random selection
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
        console.log(computersTurn)
        gamePlay();
    } else {
        whoGoesFirst.innerHTML = "PLAYER";
        whoGoesFirst.style.width = "170px";
        whoGoesFirst.style.height = "40px";
        whoGoesFirst.style.justifySelf = "center";
        playersTurn = true;
        console.log(playersTurn)
        gamePlay();
    }
  
}
coinFlip.onclick = whoseTurn;



//Creating the tile style once clicked
// const gamePlay = (event) => {
//         if(playersTurn){
//             event.target.innerHTML = playerSymbol;
//             event.target.style.fontSize = "5rem";
//             playersTurn = false;
//             computersTurn = true   
//         }
//         if(computersTurn){
//             event.target.innerHTML = computerSymbol;
//             event.target.style.fontSize = "5rem";
//             computersTurn = false;
//             playersTurn = true;  
//         }
        
// }
// const markBoard = (arr) => {
//     arr.onclick = mark;
// }
// tile.forEach((t) => {
//     markBoard(t);
// })   




    
    

