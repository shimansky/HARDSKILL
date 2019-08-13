var button = document.getElementById('findWork');
var anotherButton = document.getElementById('findCandidate');
var logotip = document.getElementById('logo');
var card = document.getElementById('card');
var hr = document.getElementById('line');


function showFormCandidate(){
var header = document.getElementById('header');
var div = document.createElement("div");
div.id = "candidateForm";
div.innerHTML = "<form action='send.php' method='post' id='sendForm'>Заполните форму <br><br><br>Ваше имя: <br><input type='text' name='first_name'><br><br>Email: <br><input type='text' name='email'required placeholder='Обязательное поле'><br><br>Телефон: <br><input type='text' name='phone'><br><br>Сообщение:<br><input type='text'  name='message' ><br><br><input id ='redButton' type='submit' name='submit' value='Отправить'><button id='close' onclick='exitForm()'>ОТМЕНА</button></form>";
header.appendChild(div);
button.style.display = "none";
anotherButton.style.display = "none";
logotip.style.display = "none";
card.style.display = "none";
hr.style.display = "none";

}

function exitForm(){
  var header = document.getElementById('header');
  var div = document.getElementById('candidateForm');
  header.removeChild(div);
  anotherButton.style.display = "inline-block";
  button.style.display = "inline-block";
  logotip.style.display = "inline-block";
  card.style.display = "inline-block";
  hr.style.display = "inline-block";
}
