var cb, cod_barras;
cb = document.getElementById("cb");
cod_barras = document.myForm.cod_barras;

/* Validacion de Código de Barras en el momento */
function validarCodBarras(form) {
    var digito = form.elements[0].value.substr(0, (form.elements[0].value.length - 1));
    let digito_control = form.elements[0].value.substr(-1);
    numbers = [3, 5, 7, 9];
    result = 0;
    for (var i = 0; i < digito.length; i++) {
        if (i == 0) {
            number = 1;
        } else {
            number = numbers[(i - 1) % 4];
        }
        result += parseInt(digito[i]) * number;
    }
    result = (parseInt(result / 2)) % 10;
    if (result == digito_control) {
        cod_barras.style.border = "3px solid #47a64a";
        cb.style.color = "#47a64a";
        cb.innerHTML = "* Código de Barras Válido";
    } else if (result != digito_control) {
        cod_barras.style.border = "3px solid red";
        cb.style.color = "red";
        cb.innerHTML = "* Código de Barras Inválido";
    }
    if (cod_barras.value.charAt(0) == 0 &&
        cod_barras.value.charAt(1) == 0 &&
        cod_barras.value.charAt(2) == 0 &&
        cod_barras.value.charAt(3) == 0 &&
        cod_barras.value.charAt(4) == 0 &&
        cod_barras.value.charAt(5) == 0 &&
        cod_barras.value.charAt(6) == 0 &&
        cod_barras.value.charAt(7) == 0 &&
        cod_barras.value.charAt(8) == 0 &&
        cod_barras.value.charAt(9) == 0 &&
        cod_barras.value.charAt(10) == 0 &&
        cod_barras.value.charAt(11) == 0) {
        cod_barras.style.border = "3px solid red";
        cb.style.color = "red";
        cb.innerHTML = "* El Código de Barras no puede contener solo ceros";
    }
    if (cod_barras.value == "") {
        cod_barras.style.border = "3px solid red";
        cb.style.color = "red";
        cb.innerHTML = "* Ingrese un Código de Barras";
    }
}
