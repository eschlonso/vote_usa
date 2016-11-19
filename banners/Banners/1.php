<!DOCTYPE html>
<html>
<head>
	<title></title>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
votacion<br>

 <button id="1" type="button">votar x clinton 1</button> ajax 
  <button id="2" type="button">votar x trump 2</button> 
<br>
  ver resultados

<script >

function hola(c){

    $.ajax({
  method: "POST",
  url: "add_voto.php",
  data: { candidato: c }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });



}



$( "#1" ).click(function() {
  alert( "Handler for .click() called." );
hola(1);



});



$( "#2" ).click(function() {
  alert( "Handler for .click() called." );
hola(2);



});




  </script>
</body>
</html>