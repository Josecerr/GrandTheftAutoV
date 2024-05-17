function revise() {
  if (register2.name.value == "") {
    alert("Please insert the name");
    return false;
  } else if (register2.password.value == "") {
    alert("You need to insert a Password");
    return false;
  } else if (register2.password.value != register2.passwordtwo.value) {
    alert("Please, repeat the first Password");
    return false;
  } else if (register2.age.value >= 0 && register2.age.value < 18) {
    var ventanaAncho = window.innerWidth;
    var ventanaAlto = window.innerHeight;
    nuevaventana = window.open(
      "",
      "",
      "width=" + ventanaAncho + ",height=" + ventanaAlto
    );
    nuevaventana.document.write(
      "<p style='color: red; font-size: 30px;'>YOU ARE NOT ON THE RANGE AGE</p>"
    );
    nuevaventana.document.write("<img src='../src/pegi18.png' alt='menor'>");
    nuevaventana.document.bgColor = "silver";
    return false;
  } else if (register2.age.value >= 18 && register2.age.value <= 40) {
    var ventanaAncho = window.innerWidth;
    var ventanaAlto = window.innerHeight;
    nuevaventana = window.open(
      "",
      "",
      "width=" + ventanaAncho + ",height=" + ventanaAlto
    );
    nuevaventana.document.write(
      "<p style='color: blue; font-size: 30px;'>WELCOME TO THE PAGE</p>"
    );
    nuevaventana.document.write("<img src='../src/gtav50.jpg' alt='menor'>");
    nuevaventana.document.bgColor = "silver";
    return true;
  } else if (register2.age.value > 40 && register2.age.value <= 100) {
    var ventanaAncho = window.innerWidth;
    var ventanaAlto = window.innerHeight;
    nuevaventana = window.open(
      "",
      "",
      "width=" + ventanaAncho + ",height=" + ventanaAlto
    );
    nuevaventana.document.write(
      "<p style='color: black; font-size: 30px;'>YOU ARE A SENIOR! WELCOME</p>"
    );
    nuevaventana.document.write("<img src='../src/yaya.jpg' alt='menor'>");
    nuevaventana.document.bgColor = "silver";
    return true;
  }
}
