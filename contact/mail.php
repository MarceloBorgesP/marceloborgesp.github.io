<html>
<body>

<?php 

server {
    listen 80;
 
    server_name marceloborgesp.github.io/;
 
    location / {
        root /Portfolio/;
        index index.html;
 
        # this is the magic
        error_page 405 =200 $uri;
    }
 
}
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "borgespereira.marcelo@gmail.com";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['comment'];
  
  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);
  
  //Email response
  echo "Thank you for contacting us!";
  }
?>

</body>
</html>