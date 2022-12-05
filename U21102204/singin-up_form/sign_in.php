<?php
   include 'database.php';

   if(isset($_POST['submit_login'])){
         $email =$_POST['email_login'];
         $password =$_POST['password_login'];

         //start making a query to check the mail is already exist or not(if exists i will terminate the condition)
         $emailquery = " select * from signup where email='$email' ";
         $email_connect = mysqli_query($connection , $emailquery); //connect with table and get email='$email' from table and store the value in " $email_connect"
         $email_count = mysqli_num_rows($email_connect); // if the mail exists then count how many email is here inside database


         if($email_count){
               $email_tot_row = mysqli_fetch_assoc($email_connect);//that will hold the data-base row related to the corresponding to the email
               $email_pass = $email_tot_row["password"]; // that just hold the password from the database related to email

               $pass_decode = password_verify($password, $email_pass);
               if($pass_decode){
                     echo "login successful";
                     ?>
                     <script>
                        alert("connection with database successful");
                        location.replace("https://niazmahmud2001.github.io/carzonexd/U19104721_AhmedOrfahli/Pages/BuyCarPage.html?");
                     </script>
                     <?php
               }else{
                  echo "login failed";
               };

         }else{
            echo "invalid password";
         }
   }
?>