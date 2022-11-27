<?php
   include 'database.php';

   if(isset($_POST['submit_signin'])){
         $username =mysqli_real_escape_string($connection, $_POST['name_signin']);
         $email =mysqli_real_escape_string($connection, $_POST['email_signin']);
         $password =mysqli_real_escape_string($connection, $_POST['password_signin']);
         $cpassword =mysqli_real_escape_string($connection, $_POST['cpassword_signin']);

         //start making a query to check the mail is already exist or not(if exists i will terminate the condition)
         $emailquery = " select * from signin where email='$email' ";
         $email_connect = mysqli_query($connection , $emailquery); //connect with table and get email='$email' from table and store the value in " $email_connect"
         $email_count = mysqli_num_rows($email_connect); // if the mail exists then count how many email is here inside database

         //start hashing the password====
         $pass =  password_hash($password , PASSWORD_BCRYPT);
         $cpass = password_hash($cpassword , PASSWORD_BCRYPT);

         if($email_count>0 || $email_count == true){
            ?>
            <script>
               alert("email is already exists in database");
            </script>
            <?php
         }else{

            if($password === $cpassword){
               //now use the insert query===
               $insertQuery = "INSERT INTO signin (name, email, password, cpassword) VALUES ('$username' , '$email' , '$pass' , '$cpass')";//'$pass' , '$cpass' ==> is the encrypted password

               mysqli_query($connection , $insertQuery);
               ?>
               <script>
                  alert("your data has inserted in table");
               </script>
               <?php
            }else{
               ?>
               <script>
                  alert("error occurred , data can not be inserted");
               </script>
               <?php
            }
         }
   }
?>