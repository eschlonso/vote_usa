<?php
$arr1='';

$candidatos = array("1", "2", "3");



//Recorro todos los elementos
for($i=1; $i<count($candidatos)+1; $i++){
      //saco el valor de cada elemento
//echo "candidato: ".$i.'<br>';


if (!$enlace = mysql_connect('', 'root', '')) {
    echo 'No pudo conectarse a mysql';
    exit;
}

if (!mysql_select_db('vote', $enlace)) {
    echo 'No pudo seleccionar la base de datos';
    exit;
}

$sql= "SELECT * FROM votos WHERE candidato=$i";
//echo $sql;

//echo "<br>";
/*select email, count(email)
from usuario
group by email
having count(email)>1
*/

$resultado = mysql_query($sql, $enlace);

if (!$resultado) {
    echo "Error de BD, no se pudo consultar la base de datos";
    echo "Error MySQL: " . mysql_error();
    exit;
}


//var_dump($resultado);
//print_r($resultado);

$count=0;
while ($fila = mysql_fetch_assoc($resultado)) {
	/*
	<iframe width="560" height="315" src="https://www.youtube.com/embed/-delbz5KmMs" frameborder="0" allowfullscreen></iframe>
	*/

	//echo $fila['id'].' - '.$fila['candidato'].'<br>';
/*
	echo '
	<div style="float:left;margin:5px;">
	<iframe width="213" height="380" src="https://www.youtube.com/embed/'.$fila['url'].'" frameborder="0" allowfullscreen></iframe>
	</div>';

	echo '
<div class="fb-share-button" data-href="https://www.youtube.com/embed/'.$fila['url'].'" data-layout="button" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/embed/'.$fila['url'].';src=sdkpreparse">Compartir video en facebook</a></div>';
*/
    //echo $fila['id']." + ".$fila['url'];
$count++;

}

mysql_free_result($resultado);


//var_dump($fila);


//$contarr=count($fila);

//echo $contarr;

//echo $count;
//$contarr=12;



	 // echo $candidatos[$i];
	  //echo "<br>";


$arr1[$i] = $count;//



      }


      //var_dump($arr1);
?>


