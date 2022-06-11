<?php
//A simple game to game to guess the random number 1 - 10 inclusive that the number has picked
//using if/else statement, for loop, readline and system('clear')
//6/10/22
$play_count = 0;
$correct_guesses = 0;
$guess_high = 0;
$guess_low = 0;

echo "This is a number guessing game!\nYou have to guess what number the computer is thinking of\n1 through 10\n";

function guessNumber(){
  global $play_count, $correct_guesses, $guess_high, $guess_low;
  $play_count++;
  echo "Let's start round $play_count!\n";
  $special_num = rand(1, 10);
  $guess = intval(readline("What is your guess?  ->  "));
  if($special_num === $guess){
    $correct_guesses++;
    return "Winner!\n";
  } elseif($guess < $special_num){
    $guess_low++;
    return "You missed!\n";
  } else {
    $guess_high++;
    return "You missed!\n";
  }
}

for($i = 1; $i <= 10; $i++){
  $print_statement = guessNumber();
  system('clear');
  echo $print_statement;
}

system('clear');
$avg_right = ($correct_guesses / 10) * 100;
echo "Your accuracy was: $avg_right%\n";
echo $guess_low > $guess_high ? "You tend to guess low!" : "You tend to guess high!";



