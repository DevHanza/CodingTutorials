<?php
// Single line comment
/* Multi Line Comment */



$name = "Zura";
$age = 32;
$isFather = true;
$money = 19.99;
$salary = null;

// echo $name;
// echo "Hello " . $name . "<br/>";
// echo "Hello {$name}! <br/>";
// echo 'Hello {$name}! <br/>';
// echo $isFather . "<br>";
// echo $money . "<br>";
// echo $salary . "<br>"


// echo gettype($name) . "<br>";
// echo gettype($age) . "<br>";
// echo gettype($isFather) . "<br>";
// echo gettype($money) . "<br>";
// echo gettype($salary) . "<br>";


// Print the whole variable
// print_r($name);
// echo "<br>";
// var_dump($name);
// echo "<br>";


// Change the calue and print the type
// $name = 32;
// echo gettype($name);
// echo "<br>";

// Varibale checking functions
// var_dump(is_string(($name)));
// echo "<br>";

// var_dump(is_string(($age)));
// echo "<br>";

// var_dump(is_int(($age)));
// echo "<br>";

// var_dump(is_bool(($isFather)));
// echo "<br>";

// var_dump(is_double(($money)));
// echo "<br>";

// var_dump(is_float(($money)));
// echo "<br>";

//  Check if variable is defined
var_dump(isset($name));
echo "<br>";

var_dump(isset($country));
echo "<br>";

var_dump(isset($salary));
echo "<br>";

?>