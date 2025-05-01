<?php 

    // For loop
    for ($i = 1; $i <= 5; $i++) {
        echo $i . " ";
    }

    //  While loop
    $i  = 1;
    while ($i <= 5) {
        echo $i . " ";
        $i++;
    }

    // Foreach loop

    $fruits = ["Apple", "Banana", "Cherry"];
    
    foreach ($fruits as $fruit) {
        echo $fruit . " ";
    }


?>