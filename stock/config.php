<?php
    $hostname = "46.101.33.73";
    $user = "stockShow";
    $password = "stockShowdb";
    $db = "stock2";
    mysqli_connect($host, $user, $password, $db);
    if(!$conn){
        die(mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");
?>