'use strict'

function registration(){
    var form = document.getElementById("form1");
    var elements = form.elements;

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute("required") && elements[i].value.trim() === "") {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }
    }
    alert("Вы успешно зарегистрировались!");
    window.location.href = '/index.html';
}
