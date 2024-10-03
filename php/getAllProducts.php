<?php
include "conectar.php";

// Obtener los datos enviados
$data = json_decode(json: file_get_contents(filename: 'php://input'), associative: true);

try {
    $sql = "SELECT * FROM historieta";
    $sentencia = $conexion->prepare($sql);
    $sentencia->execute();

    // Obtener los resultados
    $products = $sentencia->fetchAll(PDO::FETCH_ASSOC);

    if (count(value: $products) > 0) {
        echo json_encode(value: $products, flags: JSON_PRETTY_PRINT);
    } else {
        echo json_encode(value: []);
    }
} catch (PDOException $e) {
    echo json_encode(value: ['error' => 'Error en la consulta']);
    // header("Location: error.php");
}