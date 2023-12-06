'use strict'
'use strict'

function submit(){
    var form = document.getElementById("form_contact");
    var elements = form.elements;

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute("required") && elements[i].value.trim() === "") {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }
    }
    alert("Форма отправлена");
    window.location.href = '/allHTML/main.html';
}
