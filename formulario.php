<html>

<head>
  <title>Grand Theft Auto-Complete</title>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <link href="style/estilo.css" rel="stylesheet" type="text/css" />
  <link rel="icon" href="src/icon.png" type="image" />
</head>

<body>
  <div class="wrapper">
    <header class="header" id="header">
      <div class="header1">
        <h1><span style="color: red;">Grand </span><span>Theft</span> <span style="color:blue;">Auto</span></h1>
        <img src="src/pngimg.com - gta_PNG14.png" />
      </div>

      <nav class="boto">
        <a href="index.html" class="v">Home</a>
        <a href="htmls/Social media.html" class="v">Social Media</a>
        <a href="htmls/Games.html" class="v">Games</a>
        <a href="htmls/News.html">News</a>
      </nav>
    </header>

    <div id="index">
      <div id="indextitle">
        <h2>Registration Complete</h2>
        <img src="src/Girl.png" alt="" />
      </div>
    </div>

    <?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = $_POST["name"];
      $surname = $_POST["surname"];
      $age = $_POST["age"];
      $email = $_POST["mail"];
      $gender = $_POST["gender"];

    }
    echo "<div id='welcome-message'>";
    echo "<h2>Welcome $name!</h2>";

    echo "<p>Thanks you for registering.</p>";
    echo "</div>";



    ?>


  </div>
</body>

</html>