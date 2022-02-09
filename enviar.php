<?php
if(isset($_POST["nombre"]) && isset($_POST["email"]) && isset($_POST["mensaje"]) ){
$to = "infomiportafolio@gmail.com";
$subject = "Mensaje-Portafolio";
$contenido .= "Nombre: ".$_POST["nombre"]."\n";
$contenido .= "Email: ".$_POST["email"]."\n\n";
$contenido .= "Comentario: ".$_POST["mensaje"]."\n\n";
$header = "From:c2140392.ferozo.com  \nReply-To:".$_POST["email"]."\n";
$header .= "Mime-Version: 1.0\n";
$header .= "Content-Type: text/plain";
if(mail($to, $subject, $contenido ,$header)){
header('location:mensaje-de-envio.html');
}
}
?>