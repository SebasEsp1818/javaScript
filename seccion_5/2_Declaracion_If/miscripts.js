function evaluarCompra(cantidadDisponible) {
    let elementoRespuestas = document.getElementById("decision");
 
    let elementoCantidad = document.getElementById("textoCantidad");
    let cantidadComprada = elementoCantidad.value;
 
    if (cantidadComprada < cantidadDisponible) {
        elementoRespuestas.textContent = "Compraste " + cantidadComprada
         + " hay disponible aun "  + 
         (cantidadDisponible - parseInt (cantidadComprada)).toString();;
    }
}