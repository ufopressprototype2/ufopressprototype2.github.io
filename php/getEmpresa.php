<?php
include "conectar.php";

try {
    $sql = "SELECT Logo FROM DATOS_EMPRESA;";
    $sentencia=$conexion->prepare($sql);
    $sentencia->execute();

    $result = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    if(count($result)>0){
        echo json_encode($result,JSON_PRETTY_PRINT);
    }else{
        echo json_encode(['resultado'=>false]);
    }
}catch(PDOException $b){
    header("location:error.php");
}
?>
