<?php
include "conectar.php";

// Obtener los datos enviados
$data = json_decode(file_get_contents('php://input'), true);
$nombre = $data['nombre'] ?? '';

try {
    $sql = "SELECT * FROM historieta WHERE Nombre LIKE :nombre";
    $sentencia = $conexion->prepare($sql);
    $searchTerm = "%$nombre%";
    $sentencia->bindParam(':nombre', $searchTerm);
    $sentencia->execute();

    // Obtener los resultados
    $products = $sentencia->fetchAll(PDO::FETCH_ASSOC);

    if (count($products) > 0) {
        echo json_encode($products, JSON_PRETTY_PRINT);
    } else {
        echo json_encode([]);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error en la consulta']);
    // header("Location: error.php");
}