<?php 
header('Access-Control-Allow-Origin: *');

$resultado = $_GET['valorCaja1'] + $_GET['valorCaja2']; 
echo $resultado;
?>
