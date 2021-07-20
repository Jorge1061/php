<?php 
header('Access-Control-Allow-Origin: index.html:1');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
$resultado = $_POST['valorCaja1'] + $_POST['valorCaja2']; 
echo $resultado;
?>
