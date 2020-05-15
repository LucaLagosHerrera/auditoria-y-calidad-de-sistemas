/* Patrones de Mascara */
$(document).ready(function () {
    $("#cod_cliente").inputmask("9{1,5}");
    $("#cuit").inputmask("99-99999999-9");
    $("#credito").inputmask("9{1,10}.99");
});

