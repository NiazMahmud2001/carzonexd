<?php
   $server = "localhost";
   $user = "root";
   $password = "";
   $db = "carzonexd";

   $connection = mysqli_connect($server , $user , $password , $db);

   if($connection){
      ?>
      <script>
         alert("connection with database successful");
         location.replace(" https://niazmahmud2001.github.io/carzonexd/");
      </script>
      <?php
   }else{
      ?>
      <script>
         alert("connection with database failed");
      </script>
      <?php
   }
?>