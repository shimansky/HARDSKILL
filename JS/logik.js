var button = document.getElementById('findWork');
var anotherButton = document.getElementById('findCandidate');
var logotip = document.getElementById('logo');
var card = document.getElementById('card');
var hr = document.getElementById('line');


function showFormCandidate(){
var header = document.getElementById('header');
var div = document.createElement("div");
div.id = "candidateForm";
div.innerHTML = "<form action='send.php' method='post' id='sendForm'>Пожалуйста аккуратно заполните все поля <br><br><br>Имя: <br><input type='text' name='first_name' required placeholder='Имя'><br><br>E-mail: <br><input type='text' name='email'required placeholder='E-mail'><br><br>Телефон: <br><input type='text' name='phone' required placeholder='телефон'><br><br>Язык программирования: <br><select><option>Java</option><option>JavaScript</option><option>C#</option><option> Kotlin</option><option>Rust</option><option>Python</option><option>C++</option><option>PHP</option><option>Go</option><option> Swift</option></select><br><br>Сообщение:<br><input type='text'  name='message' ><br><br><input id ='sendButton' type='submit' name='submit' value='Отправить'><button id='dissalowButton' onclick='exitForm()'>ОТМЕНА</button></form>";
header.appendChild(div);
button.style.display = "none";
anotherButton.style.display = "none";
logotip.style.display = "none";
card.style.display = "none";
hr.style.display = "none";
}




function showFormClient(){
var header = document.getElementById('header');
var div = document.createElement("div");
div.id = "candidateForm";
div.innerHTML = "<form action='send.php' method='post' id='sendForm'>Заполните форму <br><br><br>Ваше имя: <br><input type='text' name='first_name'><br><br>Email: <br><input type='text' name='email'required placeholder='Обязательное поле'><br><br>Телефон: <br><input type='text' name='phone'><br><br>Сообщение:<br><input type='text'  name='message' ><br><br><input id ='sendButton' type='submit' name='submit' value='Отправить'><button id='dissalowButton' onclick='exitForm()'>ОТМЕНА</button></form>";
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
