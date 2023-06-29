<?php
$arr1 = array("Plank", "Hand slide crunch", "Mountain climber", "Reverse crunch", "Grounded Russian twist", "Dead bug", "Leg raise" );
$arr2 = array("Nice Job",  "You are crushing it", "Keep kickin it", "Progress!!", "Keep going");
shuffle($arr1); shuffle($arr2);

for($i = 0; $i < count($arr1); $i++){
  echo $arr2[$i] . " It's time to switch to the " . $arr1[$i] . " \n";
  sleep(299);
}

?>


