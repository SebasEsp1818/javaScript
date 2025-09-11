function Calcular() {
    let elementoNumero1 = document.getElementById("numero1");
    let elementoNumero2 = document.getElementById("numero2");
    let elementoRespuesta = document.getElementById("Respuesta");

    let Numero1 = elementoNumero1.value;
    let Numero2 = elementoNumero2.value;

    let Calcular1 = Numero1 >= Numero2
    elementoRespuesta.textContent = Calcular1

    let Calcular2 = Numero2 <= Numero1
    elementoRespuesta.textContent = Calcular2
}