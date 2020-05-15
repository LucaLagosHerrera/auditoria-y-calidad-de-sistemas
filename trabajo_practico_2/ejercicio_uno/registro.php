<?php
include 'bbdd.php';
$cod_cliente = $_POST["cod_cliente"];
$razon_social = $_POST["razon_social"];
$cuit = $_POST["cuit"];
$fecha_alta = $_POST["fecha_alta"];
$fecha_pedido = $_POST["fecha_pedido"];
$provincia = $_POST["provincia"];
$credito = $_POST["credito"];

$insertar = "INSERT INTO usuario (cod_cliente, razon_social, cuit, fecha_alta, fecha_pedido, provincia, credito) 
VALUES ('$cod_cliente', '$razon_social', '$cuit', '$fecha_alta', '$fecha_pedido', '$provincia', '$credito')";

$verificar_cod_cliente = mysqli_query($conexion, "SELECT * FROM usuario WHERE cod_cliente = '$cod_cliente'");
if (mysqli_num_rows($verificar_cod_cliente) > 0) {
    header('Location: registro_cc_duplicado.html');
    exit;
} else {
    $resultado = mysqli_query($conexion, $insertar);
    if (!$resultado) {
        header('Location: registro_error.html');
    } else {
        header('Location: registro_exitoso.html');
    }

    mysqli_close($conexion);
}
