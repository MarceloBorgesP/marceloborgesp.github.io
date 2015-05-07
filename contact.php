<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href='http://fonts.googleapis.com/css?family=Anton' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">

  <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
  <link rel="import" href="bower_components/paper-elements/paper-elements.html">
  <link rel="import" href="bower_components/core-header-panel/core-header-panel.html">

  <title>Contact Me</title>
</head>

<body fullbleed layout vertical>
<core-header-panel flex>
  <div class="container">
    <div class="header"></div>

    <section class="content animated bounceInRight">

      <div layout vertical>
      <?php
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
  
  //if "email" variable is not filled out, display the form
  else  {
?>
        <form action="contact/welcome.php" method="post">
          <div>
            <h3>Contact Me</h3>
            <p>Get in touch with me right now!</p>
          </div>

          <div layout horizontal>
            <paper-input floatingLabel="true" flex name="name" label="Your Name"></paper-input>
            <paper-input floatingLabel="true" flex name="email" label="Your Email"></paper-input>
          </div>

          <div layout horizontal>
            <paper-input floatingLabel="true" flex name="address" label="Your Full Address"></paper-input>
          </div>

          <div>
            <h4 layout horizontal flex>Gender </h4>
            <paper-radio-group selected="male" layout horizontal>
              <paper-radio-button name="male" flex label="Male"></paper-radio-button>
              <paper-radio-button name="female" flex label="Female"></paper-radio-button>
            </paper-radio-group>
          </div>

          
          <div layout vertical>
            <paper-input floatingLabel="true" name="subject" label="Subject"></paper-input>
            <label layout horizontal><textarea flex name="comment" placeholder="your text here"></textarea></label>
          </div>

          <div layout horizontal>
            <paper-button raised flex>Reset</paper-button>
            <paper-button type="submit" raised flex>Submit</paper-button>
          </div>

        </form>
      </div>  
    </section>
  </div>
</core-header-panel>
</body>

<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
</html>