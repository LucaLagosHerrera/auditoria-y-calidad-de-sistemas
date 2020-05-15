var tc, tarjeta_credito;
tc = document.getElementById("tc");
tarjeta_credito = document.myForm.tarjeta_credito;

/* Validacion de Tarjeta de Crédito en el momento */
function validarTarjCredito(form) {
    var one = form.elements[0].value;
    var two = one.replace(/\s/g, "");
    var digito = two.substr(0, (two.length - 1));
    let digito_control = form.elements[0].value.substr(-1);
    three = false;
    result = 0;

    for (var i = 0; i < digito.length; i++) {

        if (parseInt(digito[i] * (three ? 2 : 1)) > 9) {
            result += -9
        }
        result += parseInt(digito[i]) * (three ? 2 : 1);
        three = !three;
    }
    result = (result * 9) % 10;

    if (result == digito_control) {
        tarjeta_credito.style.border = "3px solid #47a64a";
        tc.style.color = "#47a64a";
        tc.innerHTML = "* Tarjeta de Crédito Válida";
    } else if (result != digito_control) {
        tarjeta_credito.style.border = "3px solid red";
        tc.style.color = "red";
        tc.innerHTML = "* Tarjeta de Crédito Inválida";
    }
    if (tarjeta_credito.value.charAt(0) == 0 &&
        tarjeta_credito.value.charAt(1) == 0 &&
        tarjeta_credito.value.charAt(2) == 0 &&
        tarjeta_credito.value.charAt(3) == 0 &&
        tarjeta_credito.value.charAt(5) == 0 &&
        tarjeta_credito.value.charAt(6) == 0 &&
        tarjeta_credito.value.charAt(7) == 0 &&
        tarjeta_credito.value.charAt(8) == 0 &&
        tarjeta_credito.value.charAt(10) == 0 &&
        tarjeta_credito.value.charAt(11) == 0 &&
        tarjeta_credito.value.charAt(12) == 0 &&
        tarjeta_credito.value.charAt(13) == 0 &&
        tarjeta_credito.value.charAt(15) == 0 &&
        tarjeta_credito.value.charAt(16) == 0 &&
        tarjeta_credito.value.charAt(17) == 0 &&
        tarjeta_credito.value.charAt(18) == 0) {
        tarjeta_credito.style.border = "3px solid red";
        tc.style.color = "red";
        tc.innerHTML = "* La Tarjeta de Crédito no puede contener solo ceros";
    }
    if (tarjeta_credito.value == "") {
        tarjeta_credito.style.border = "3px solid red";
        tc.style.color = "red";
        tc.innerHTML = "* Ingrese su Tarjeta de Crédito";
    }
}


