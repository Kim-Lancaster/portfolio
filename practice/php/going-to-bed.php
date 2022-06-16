<?php
class StringUtilities {
  static function secondCase($str){
    if($str === ""){
      return "";
    } elseif(strlen($str) === 1){
      return strtoupper($str);
    } else {
      $str = strtolower($str);
      $str[1] = strtoupper($str[1]);
      return $str;
    }
  }
}
class Pajamas{
  private $owner, $fit, $color; 
  function __construct($owner, $fit, $color){
    $this->owner = StringUtilities::secondCase($owner);
    $this->fit = $fit;
    $this->color = $color;
  }
  public function describe(){
    return "$this->owner has a lovely pair of $this->fit pajamas in the color $this->color!";
  }
  public function setFit($fit){
    $this->fit = $fit;
  }
}

class ButtonablePajamas extends Pajamas {
  private $button_state = "unbuttoned";

  public function describe(){
    return Pajamas::describe() . "They are $this->button_state.";
  }
  public function toggleButtons(){
    $this->button_state = "buttoned";
  }
}



$chicken_PJs = new Pajamas("CHICKEN", "loose", "brown");
echo $chicken_PJs->describe();
$chicken_PJs->setFit("tight");
echo $chicken_PJs->describe();
echo"\n\n";
$moose_PJs = new ButtonablePajamas("MOOSE", "tight", "pink");
echo $moose_PJs->describe();
$moose_PJs->toggleButtons();
echo $moose_PJs->describe();




