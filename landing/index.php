<?php 

include('../result.php');


/*
$a = array(
    "one" => 1111,
    "two" => 2,
    "three" => 3,
    "seventeen" => 17
);

foreach ($arr1 as $k => $v) {
    echo "$k => $v";
    echo "<br>";
}
*/

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sausage Party</title>
<link href="css/styles.css" rel="stylesheet" type="text/css" />
</head>

<body class="BgGradient">
<div   id="flag" style="background-image:url(imgs/img_flag.png)" class="imgwrapper"> </div>
<div   id="flagLeft" style="background-image:url(imgs/img_flag.png)" class="imgwrapper"> </div>
<div id="logo"><img src="imgs/logo_sausageparty.png" width="655" height="292" alt="Sausage Party" class="imgwrapper" /></div>


<!--

<div id="imgCharacter"><img src="imgs/img_hill.png" width="400" height="400" alt="" class="imgwrapperCharacter"/></div>
<div id="titularVideo">
  <h1>65%</h1>
</div>
<div id="WinName">
  <div>
    <h2 class="winner"> Chillary</h2>
  </div>
</div>
-->


<div id="WinList" > 
  <!--<div id="Mendoza" class="txtPcias">
    <p class="OtherWin">&nbsp;</p>
    <br />
    <br />
  </div>-->

<?php 


/*
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
*/


?>


  <ul  class="txtRestFont">

  <?php 
foreach($arr1 as $x => $x_value) {
 
  ?>
    <li class="txtRest"> <img src="imgs/img_bagel.png" width="140" height="146" alt=""/><?php echo  $x; ?><span class="otherPer"> <?php echo  $x_value; ?> </span><hr /></li>
 <?php 

}

 ?>


    
  </ul>
</div>
<div class="btFormat" id="btleft"> BUTTON 1 </div>
<div class="btFormat" id="btright">BUTTON 2</div>
<div id= "share"><br />
  <br />
  <a href="#"></a>
  <div id="iconos">
    <div class="redes"><a href="https://www.facebook.com/DoveArgentina/" title="Dove Argentina Facebook" target="_blank"><span class="fa fa-facebook" aria-hidden="true"></span></a> </div>
    <div class="redes"><a href="https://twitter.com/dove_ar?lang=es" title="Dove Argentina Twitter" target="_blank"><span class="fa fa-twitter" aria-hidden="true"></span> </a></div>
    <div class="redes"><a href="https://www.instagram.com/dove/" title="Dove Argentina Instagram" target="_blank"><span class="fa fa-instagram" aria-hidden="true"></span></a></div>
    <div class="redes"><a href="https://www.youtube.com/user/DoveArgentina" title="Dove Argentina YouTube" target="_blank"><span class="fa fa-youtube" aria-hidden="true"></a></div>
  </div>
</div>
<div id="footer">Quod iisque sit ei,<br />
albucius oportere no eos.<br />
</div>
</div>
</body>
</html>
