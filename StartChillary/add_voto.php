<?php 
include('db.php');

$con = mysql_connect($dbhost,$dbuser,$dbpass);

if (!$con){

  die('Could not connect: ' . mysql_error());

  }

 

mysql_select_db($dbname, $con);

 

$sql="INSERT INTO votos (candidato)

VALUES

('".$_POST['candidato']."')";//

 

if (!mysql_query($sql,$con))

  {

  die('Error: ' . mysql_error());

  }

echo "1 record added";

 

mysql_close($con)



/*

$sql = "INSERT INTO votos (candidato) VALUES ('John')";


  mysql_query($sql);

  echo "<h2>Thank you!</h2>";

  mysql_close($conn);

*/



?>
ok