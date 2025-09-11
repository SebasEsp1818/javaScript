function mostrarPrecio(fruta) {
    let precio;
    switch (fruta) {
        case "Manzana":
            precio = 15;
            break;
        case 'Naranja':
            precio = 20;
            break;
        case 'Banana':
            precio = 25;
            break;
        default:
            alert('Fruta no disponible');
            return;
    }
    alert("El precio de " + fruta + " es: " + precio);
}

function enviar() {
    let fruta = document.getElementById('numeroFruta').value;
    mostrarPrecio(fruta);
}