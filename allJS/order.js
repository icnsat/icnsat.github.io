'use strict'

function order(){
    var form = document.getElementById("form_contact");
    var elements = form.elements;

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute("required") && elements[i].value.trim() === "") {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }
    }
    alert("Заказ оформлен. Ожидайте письмо на электронную почту.");
    window.location.href = '/index.html';
}


function start(){
    var elem = document.querySelector('.order_sum');
    elem.innerHTML += localStorage.getItem('sum');
}

start();
