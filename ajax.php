<?php 
header('Access-Control-Allow-Origin: file:///C:/Users/EstebanDur%C3%A1n(AuraQua/Downloads/Jquery/index.html');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
$resultado = $_POST['valorCaja1'] + $_POST['valorCaja2']; 
echo $resultado;
?>