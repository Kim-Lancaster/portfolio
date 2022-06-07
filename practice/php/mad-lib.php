<?php
#Simple mad-lib in PHP using str_replace, arrays and user input
#6/1/22
function getUserInput(){
  $noun = readline("Please enter a noun: ");
  $verb = readline("Please enter a verb: ");
  $distance_unit = readline("Please enter a measurement(distance): ");
  $color = readline("Please enter a color: ");
  return array($noun, $color, $distance_unit, $verb);
}
$story = "The woods are lovely, dark, and deep.
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.";
$words_to_replace = array("woods", "dark", "miles", "sleep");
$replacement_words = getUserInput();
$new_story = str_replace($words_to_replace, $replacement_words, $story);

echo $new_story;