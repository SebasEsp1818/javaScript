function verificar() {
    let elementoRespuesta = document.getElementById("decision");

    let elementoEdad = document.getElementById("textoEdad");
    let edad = parseInt(elementoEdad.value);

    if (edad < 18) {
        elementoRespuesta.textContent = "Tienes " + edad + " años, te falta " + (18 - edad) + " años para ser mayor de edad";
    } else if (edad < 21) {
        elementoRespuesta.textContent = "Tienes " + edad + " años, te falta " + (21 - edad) + " años para poder comprar licor";
    } else {
        elementoRespuesta.textContent = "Ya puedes comprar licor";
    }
}
