//Variables

let elementoEdad = document.getElementById("Edad");
let elementoTexto = document.getElementById("Recomendacion");

//Funcion de Recomendacion de Peliculas

function Pelicula(Genero) {

    let Edad = parseInt(elementoEdad.value);
    let Pelicula = "";
    if (isNaN(Edad)) {
        alert("Ingresa su edad");
        return;
    }

    switch (Genero) {
        case 'Drama':
            if (Edad < 13) {
                Pelicula = "Casa Blanca";
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "The Shawshank Redemption";
                } else
                    if (Edad >= 16) {
                        Pelicula = "Taxi Driver";
                    } break;

        case 'Comedia':

            if (Edad < 13) {
                Pelicula = "Back to the Future";
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "The Truman Show";
                } else
                    if (Edad >= 16) {
                        Pelicula = "The Wolf of Wall Street";
                    } break;

        case 'Musical':

            if (Edad < 13) {
                Pelicula = "La La Land ";
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "Les Misérables";
                } else
                    if (Edad >= 16) {
                        Pelicula = "The Rocky Horror Picture Show";
                    } break;

        case 'Crimen':

            if (Edad < 13) {
                Pelicula = "No hay opciones";
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "El Secreto de sus Ojos";
                } else
                    if (Edad >= 16) {
                        Pelicula = "The Godfather";
                    } break;
    }

    elementoTexto.textContent = "Recomendación: " + Pelicula;
}


function reiniciarRecomendacion() {
    elementoEdad.value = ""; // 
    elementoTexto.textContent = "Recomendación: "; 
}
