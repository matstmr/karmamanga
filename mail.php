<?php 

    if (isset($_POST["msg_mail"]) && $_POST["msg_mail"] !="")
    {
        $expediteur = $_POST["msg_mail"];
        $destinataire = "karmaamanga@gmail.com";
        $entete = "From : " .$expediteur;

        $contenu_message = utf8_decode($_POST["msg_contenu"])."\r\n";
        $contenu_message = "De : ".$_POST["msg_mail"].", Sujet : ".$contenu_message;

        mail($destinataire,$contenu_message,$entete);


    echo "<HTML><HEAD>";
    echo "<TITLE>Formulaire envoyer!</TITLE></HEAD><BODY>";
    echo "<H1 align=center>Merci, $nom </H1>";
    echo "<P align=center>";
    echo "Votre formulaire à bien été envoyé !</P>";
    echo "</BODY></HTML>";
    }
?>