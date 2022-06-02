//First warmup code. Super simple. Should take a float from the user and return how many of each coin it is.
//So $3.62 would be - quarters:14, dimes: 1, nickles: 0, pennies : 2

const prompt = require("prompt-sync")({ sigint: true });
let change = prompt("Please enter your change: ");

const quarters = (change) => {
    return Math.floor(change / 25);
}
const dimes = (change) => {
    return Math.floor(change / 10);
}
const nickles = (change) => {
    return Math.floor(change / 5);
}

let outputStr = "Your change is: "
change = parseFloat(change);
change = Math.floor(change * 100);

if(isNaN(change)){
    console.log("Incorrect input");
}
if(change > 25){
    let amount = quarters(change);
    change -= amount * 25;
    outputStr += `quarters: ${amount}, `;
}
if(change > 10){
    let amount = dimes(change);
    change -= amount * 10;
    outputStr += `dimes: ${amount}, `;
}
if(change > 5){
    let amount = nickles(change);
    change -= amount * 5;
    outputStr += `nickles: ${amount}, `;
}
if(change > 0){
    let amount = change;
    outputStr += `pennies: ${amount}!`
}

console.log(outputStr);
