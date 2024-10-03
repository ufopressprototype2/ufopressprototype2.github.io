<?php

/*Inicia una conexión, en este caso a la base de datos nombrada "comicverse"
con usuario "root" y contraseña "" ubicada en el localhost*/
try{
$conexion = new PDO('mysql:host=localhost;dbname=comicverse', "root", "");
}catch (PDOException $e){
    echo $e->getMessage();
    die();
}
?>