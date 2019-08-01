function showFormCandidate(){
var header = document.getElementById('header');
var div = document.createElement("div");
div.id = "candidateForm";
div.innerHTML = "<form action='send.php' method='post' id='sendForm'>Оставьте свое сообщение и мы свяжемся с вами <br><br><br>Ваше имя: <br><input type='text' name='first_name'><br><br>Email: <br><input type='text' name='email'required placeholder='Обязательное поле'><br><br>Телефон: <br><input type='text' name='phone'><br><br>Сообщение:<br><input type='text'  name='message' ><br><br><input id ='redButton' type='submit' name='submit' value='Отправить'><button id='close' onclick='exitForm()'>ОТМЕНА</button></form>";
header.appendChild(div);
var button = document.getElementById('findWork');
button.style.display = "none";
}

function exitForm(){
  var header = document.getElementById('header');
  var div = document.getElementById('candidateForm');
  header.removeChild(div);
  var button = document.getElementById('findWork');
  button.style.display = "inline-block";
}
