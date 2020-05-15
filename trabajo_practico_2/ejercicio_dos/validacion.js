var nc, cuenta;
nc = document.getElementById("nc");
cuenta = document.myForm.cuenta;

/* Validacion de Número de Cuenta en el momento */
function validarCuenta(form) {
    var digito = form.elements[0].value.substr(0, (form.elements[0].value.length - 2));
    let digito_control = form.elements[0].value.substr(-1);
    three = true;
    result = 0;
    for (var i = 0; i < digito.length; i++) {
        result += parseInt(digito[i]) * (three ? 3 : 1);
        three = !three;
    }
    result = result % 10;
    if (result == digito_control) {
        cuenta.style.border = "3px solid #47a64a";
        nc.style.color = "#47a64a";
        nc.innerHTML = "* Número de Cuenta Válido";
    } else if (result != digito_control) {
        cuenta.style.border = "3px solid red";
        nc.style.color = "red";
        nc.innerHTML = "* Número de Cuenta Inválido";
    }
    if (cuenta.value.charAt(0) == 0 &&
        cuenta.value.charAt(1) == 0 &&
        cuenta.value.charAt(2) == 0 &&
        cuenta.value.charAt(3) == 0 &&
        cuenta.value.charAt(4) == 0 &&
        cuenta.value.charAt(5) == 0 &&
        cuenta.value.charAt(6) == 0 &&
        cuenta.value.charAt(8) == 0) {
        cuenta.style.border = "3px solid red";
        nc.style.color = "red";
        nc.innerHTML = "* El Número de Cuenta no puede contener solo ceros";
    }
    if (cuenta.value == "") {
        cuenta.style.border = "3px solid red";
        nc.style.color = "red";
        nc.innerHTML = "* Ingrese su Número de Cuenta";
    }
}

