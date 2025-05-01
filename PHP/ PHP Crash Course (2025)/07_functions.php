<?php

// Simple Function
function sayHello()
{
    echo "Hello, World";
}

sayHello();

// With Parameter
echo "<hr>";

function greet($name)
{
    echo "Hello, $name";
}

greet("Alice");
echo "<br>";
greet("Bob");

// Parameter default value
echo "<hr>";

function sayHi($name = 'Guest')
{
    echo "Hello, $name!";
}

sayHi();
echo "<br>";
sayHi("Jhon");

// Return from function 
echo "<hr>";


function mutiply($a, $b)
{
    return $a * $b;
}

$result = mutiply(4, 3);
echo $result;

    ?>