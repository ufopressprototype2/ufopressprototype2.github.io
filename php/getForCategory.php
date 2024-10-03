<?php
include "conectar.php";

// Obtener la categoría enviada por POST
$data = json_decode(json: file_get_contents(filename: 'php://input'), associative: true);
$categoria = $data['categoria'] ?? '';

try {
    // Consulta para seleccionar historietas según la categoría
    $sql = "SELECT * FROM historieta WHERE Categoria = :categoria";
    $sentencia = $conexion->prepare($sql);
    $sentencia->bindParam(param: ':categoria', var: $categoria);
    $sentencia->execute();

    // Obtener los resultados
    $products = $sentencia->fetchAll(PDO::FETCH_ASSOC);

    if (count($products) > 0) {
        echo json_encode(value: $products, flags: JSON_PRETTY_PRINT);
    } else {
        echo json_encode(value: []);
    }
} catch (PDOException $e) {
    echo json_encode(value: ['error' => 'Error en la consulta']);
}
