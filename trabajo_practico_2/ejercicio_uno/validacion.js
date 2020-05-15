var cc, rs, cu, fa, fp, p, c;
cc = document.getElementById("cc");
rs = document.getElementById("rs");
cu = document.getElementById("cu");
fa = document.getElementById("fa");
fp = document.getElementById("fp");
p = document.getElementById("p");
c = document.getElementById("c");

var cod_cliente, razon_social, cuit, fecha_alta, fecha_pedido, provincia, credito;
cod_cliente = document.myForm.cod_cliente;
razon_social = document.myForm.razon_social;
cuit = document.myForm.cuit;
fecha_alta = document.myForm.fecha_alta;
fecha_pedido = document.myForm.fecha_pedido;
provincia = document.myForm.provincia;
credito = document.myForm.credito;

/* Validacion de Codigo de Cliente en el momento */
function validarCodCliente() {

    if (cod_cliente.value == "") {
        cod_cliente.style.border = "3px solid red";
        cc.style.color = "red";
        cc.innerHTML = "* Ingrese su Codigo de Cliente";
    } else if (!/^[0-9]+$/.test(cod_cliente.value)) {
        cod_cliente.style.border = "3px solid red";
        cc.style.color = "red";
        cc.innerHTML = "* Solo se pueden ingresar caracteres numericos";
    } else if (cod_cliente.value.charAt(0) == 0) {
        cod_cliente.style.border = "3px solid red";
        cc.style.color = "red";
        cc.innerHTML = "* El Codigo de Cliente no puede comenzar con 0";
    } else if (cod_cliente.value.length < 1 || cod_cliente.value.length > 5) {
        cod_cliente.style.border = "3px solid red";
        cc.style.color = "red";
        cc.innerHTML = "* El Codigo de Cliente debe contener entre 1 y 5 numeros";
    } else if (cod_cliente.value.length >= 1 || cod_cliente.value.length <= 5) {
        cod_cliente.style.border = "3px solid #47a64a";
        cc.style.color = "#47a64a";
        cc.innerHTML = "* Codigo de Cliente Válido";
    }
}

/* Validacion de Razon Social en el momento */
function validarRazonSocial() {
    if (razon_social.value == "") {
        razon_social.style.border = "3px solid red";
        rs.style.color = "red";
        rs.innerHTML = "* Ingrese su Razon Social";
    } else if (!/^[a-zA-Z.,\s]+$/.test(razon_social.value)) {
        razon_social.style.border = "3px solid red";
        rs.style.color = "red";
        rs.innerHTML = "* Solo se pueden ingresar caracteres alfabeticos, puntos y comas";
    } else if (razon_social.value.length < 3 || razon_social.value.length > 30) {
        razon_social.style.border = "3px solid red";
        rs.style.color = "red";
        rs.innerHTML = "* La Razon Social debe contener entre 3 y 30 caracteres";
    } else if (razon_social.value.length >= 3 || razon_social.value.length <= 30) {
        razon_social.style.border = "3px solid #47a64a";
        rs.style.color = "#47a64a";
        rs.innerHTML = "* Razon Social Válida";
    }
}


/* Validacion de CUIT en el momento */
function validarCuit() {
    if (cuit.value == "") {
        cuit.style.border = "3px solid red";
        cu.style.color = "red";
        cu.innerHTML = "* Ingrese su CUIT";
    } else if (!/^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g.test(cuit.value)) {
        cuit.style.border = "3px solid red";
        cu.style.color = "red";
        cu.innerHTML = "* CUIT Invalido";
    } else if (/^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g.test(cuit.value)) {
        cuit.style.border = "3px solid #47a64a";
        cu.style.color = "#47a64a";
        cu.innerHTML = "* CUIT Válido";
    }
}

/* Validacion de Fecha de Alta en el momento */
function validarFechaAlta() {
    var valueDate = document.getElementById("fecha_alta").value;
    if (!Date.parse(valueDate)) {
        fecha_alta.style.border = "3px solid red";
        fa.style.color = "red";
        fa.innerHTML = "* Ingrese su Fecha de Alta";
    } else if (Date.parse(valueDate)) {
        fecha_alta.style.border = "3px solid #47a64a";
        fa.style.color = "#47a64a";
        fa.innerHTML = "* Fecha de Alta Válida";
    }
}

/* Validacion de Fecha de Último Pedido en el momento */
function validarFechaPedido() {
    var valueDate = document.getElementById("fecha_pedido").value;
    if (!Date.parse(valueDate)) {
        fecha_pedido.style.border = "3px solid red";
        fp.style.color = "red";
        fp.innerHTML = "* Ingrese su Fecha de Último Pedido";
    } else if (Date.parse(valueDate)) {
        fecha_pedido.style.border = "3px solid #47a64a";
        fp.style.color = "#47a64a";
        fp.innerHTML = "* Fecha de Último Pedido Válida";
    }
}

/* Validacion de Provincia en el momento */
function validarProvincia() {
    if (provincia.value == "") {
        provincia.style.border = "3px solid red";
        p.style.color = "red";
        p.innerHTML = "* Ingrese su Provincia de residencia";
    } else if (!/^[a-zA-Z\s]+$/.test(provincia.value)) {
        provincia.style.border = "3px solid red";
        p.style.color = "red";
        p.innerHTML = "* Solo se pueden ingresar caracteres alfabeticos";
    } else if (provincia.value.length < 3 || provincia.value.length > 15) {
        provincia.style.border = "3px solid red";
        p.style.color = "red";
        p.innerHTML = "* La Provincia de residencia debe contener entre 3 y 15 caracteres";
    } else if (provincia.value.length >= 3 || provincia.value.length <= 15) {
        provincia.style.border = "3px solid #47a64a";
        p.style.color = "#47a64a";
        p.innerHTML = "* Provincia de residencia Válida";
    }
}

/* Validacion de Límite de Crédito en el momento */
function validarCredito() {
    if (credito.value == "") {
        credito.style.border = "3px solid red";
        c.style.color = "red";
        c.innerHTML = "* Ingrese su Límite de Crédito";
    } else if(!/^[0-9]{1,10}(\.[0-9]{2})$/g.test(credito.value)){
        credito.style.border = "3px solid red";
        c.style.color = "red";
        c.innerHTML = "* Límite de Crédito Inválido";
    } else if(/^[0-9]{1,10}(\.[0-9]{2})$/g.test(credito.value)){
        credito.style.border = "3px solid #47a64a";
        c.style.color = "#47a64a";
        c.innerHTML = "* Limite de Credito Válido";
    }
}

function validar() {
    /* Validacion de espacios vacios */
    if (cod_cliente.value == "") {
        cod_cliente.style.border = "3px solid red";
        cc.style.color = "red";
        cc.innerHTML = "* Ingrese su Codigo de Cliente";
        return false;
    }
    if (razon_social.value == "") {
        razon_social.style.border = "3px solid red";
        rs.style.color = "red";
        rs.innerHTML = "* Ingrese su Razon Social";
        return false;
    }
    if (cuit.value == "") {
        cuit.style.border = "3px solid red";
        cu.style.color = "red";
        cu.innerHTML = "* Ingrese su CUIT";
        return false;
    }
    var valueDateAlta = document.getElementById("fecha_alta").value;
    if (!Date.parse(valueDateAlta)) {
        fecha_alta.style.border = "3px solid red";
        fa.style.color = "red";
        fa.innerHTML = "* Ingrese su Fecha de Alta";
        return false;
    }
    var valueDatePedido = document.getElementById("fecha_pedido").value;
    if (!Date.parse(valueDatePedido)) {
        fecha_pedido.style.border = "3px solid red";
        fp.style.color = "red";
        fp.innerHTML = "* Ingrese su Fecha de Último Pedido";
        return false;
    }
    if (provincia.value == "") {
        provincia.style.border = "3px solid red";
        p.style.color = "red";
        p.innerHTML = "* Ingrese su Provincia de residencia";
        return false;
    }
    if (credito.value == "") {
        credito.style.border = "3px solid red";
        c.style.color = "red";
        c.innerHTML = "* Ingrese su Límite de Crédito";
        return false;
    }

    /* Validacion de Código de Cliente duplicado */


    /* Validacion de solo ceros */
    if (cod_cliente.value.charAt(0) == 0) {
        cod_cliente.style.border = "3px solid red";
        cc.style.color = "red";
        cc.innerHTML = "* El Codigo de Cliente no puede comenzar con 0";
        return false;
    }

    /* Validacion de tipos de caracteres */
    if (!/^[0-9]+$/.test(cod_cliente.value)) {
        cod_cliente.style.border = "3px solid red";
        cc.style.color = "red";
        cc.innerHTML = "* Solo se pueden ingresar caracteres numericos";
        return false;
    }
    if (!/^[a-zA-Z.,\s]+$/.test(razon_social.value)) {
        razon_social.style.border = "3px solid red";
        rs.style.color = "red";
        rs.innerHTML = "* Solo se pueden ingresar caracteres alfabeticos";
        return false;
    }
    if (!/^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g.test(cuit.value)) {
        cuit.style.border = "3px solid red";
        cu.style.color = "red";
        cu.innerHTML = "* CUIT Invalido";
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(provincia.value)) {
        provincia.style.border = "3px solid red";
        p.style.color = "red";
        p.innerHTML = "* Solo se pueden ingresar caracteres alfabeticos";
        return false;
    }
    if(!/^[0-9]{1,10}(\.[0-9]{2})$/g.test(credito.value)){
        credito.style.border = "3px solid red";
        c.style.color = "red";
        c.innerHTML = "* Límite de Crédito Inválido";
        return false;
    }

    /* Validacion de cantidad permitida de caracteres */
    if (cod_cliente.value.length < 1 || cod_cliente.value.length > 5) {
        cod_cliente.style.border = "3px solid red";
        cc.style.color = "red";
        cc.innerHTML = "* El Codigo de Cliente debe contener entre 1 y 5 numeros";
        return false;
    }
    if (razon_social.value.length < 3 || razon_social.value.length > 30) {
        razon_social.style.border = "3px solid red";
        rs.style.color = "red";
        rs.innerHTML = "* La Razon Social debe contener entre 3 y 30 caracteres";
        return false;
    }
    if (cuit.value.length != 13) {
        cuit.style.border = "3px solid red";
        cu.style.color = "red";
        cu.innerHTML = "* El CUIT debe contener 11 numeros";
        return false;
    }
    if (provincia.value.length < 3 || provincia.value.length > 15) {
        provincia.style.border = "3px solid red";
        p.style.color = "red";
        p.innerHTML = "* La Provincia de residencia debe contener entre 3 y 15 caracteres";
        return false;
    }

    /* Validacion exitosa */
    if (cod_cliente.value.length >= 1 || cod_cliente.value.length <= 5) {
        cod_cliente.style.border = "3px solid #47a64a";
        cc.style.color = "#47a64a";
        cc.innerHTML = "* Codigo de Cliente Valido";
        return true;
    }
    if (razon_social.value.length >= 3 || razon_social.value.length <= 30) {
        razon_social.style.border = "3px solid #47a64a";
        rs.style.color = "#47a64a";
        rs.innerHTML = "* Razon Social Valida";
        return true;
    }
    if (/^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g.test(cuit.value)) {
        cuit.style.border = "3px solid #47a64a";
        cu.style.color = "#47a64a";
        cu.innerHTML = "* CUIT Valido";
        return true;
    }
    var valueDateAlta = document.getElementById("fecha_alta").value;
    if (Date.parse(valueDateAlta)) {
        fecha_alta.style.border = "3px solid #47a64a";
        fa.style.color = "#47a64a";
        fa.innerHTML = "* Fecha de Alta Valida";
        return true;
    }
    var valueDatePedido = document.getElementById("fecha_pedido").value;
    if (Date.parse(valueDatePedido)) {
        fecha_pedido.style.border = "3px solid #47a64a";
        fp.style.color = "#47a64a";
        fp.innerHTML = "* Fecha de Último Pedido Valida";
        return true;
    }
    if (provincia.value.length >= 3 || provincia.value.length <= 15) {
        provincia.style.border = "3px solid #47a64a";
        p.style.color = "#47a64a";
        p.innerHTML = "* Provincia de residencia Valida";
        return true;
    }
    if(/^[0-9]{1,10}(\.[0-9]{2})$/g.test(credito.value)){
        credito.style.border = "3px solid #47a64a";
        c.style.color = "#47a64a";
        c.innerHTML = "* Limite de Credito Válido";
        return true;
    }
}







