<?php 
header('Access-Control-Allow-Origin: *');

$resultado = $_POST['valorCaja1'] + $_POST['valorCaja2']; 
echo $resultado;
?>
