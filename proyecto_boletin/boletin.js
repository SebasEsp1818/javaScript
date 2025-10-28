const notas = [7, 4, 8, 9, 6]; 
const notaMinima = 4; 

const elementoLista = document.getElementById('listaNotas');
const resultadoPromedio = document.getElementById('resultadoPromedio');
const resultadoNotaAlta = document.getElementById('resultadoNotaAlta');
const resultadoAplazados = document.getElementById('resultadoAplazados');


function listarNotas() {
    elementoLista.innerHTML = ""; 
    
    let listaHTML = ""; 
    
    for (let i = 0; i < notas.length; i++) {
        listaHTML = listaHTML + "<li>" + notas[i] + "</li>";
    }
    
    elementoLista.innerHTML = listaHTML;
    
    resultadoPromedio.textContent = "Resultado del promedio: ";
    resultadoNotaAlta.textContent = "Resultado de la nota más alta: ";
    resultadoAplazados.textContent = "Resultado de la consulta: ";
}

function calcularPromedio() {
    let suma = 0;
    
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i]; 
    }
    
    const promedio = suma / notas.length;
    
    const promediO = Math.round(promedio * 10) / 10;
    
    resultadoPromedio.textContent = "Resultado del promedio: " + promediO;
}

function notaMasAlta() {
    let notaMaxima = notas[0];
    
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > notaMaxima) {
            notaMaxima = notas[i]; 
        }
    }
    
    resultadoNotaAlta.textContent = "Resultado de la nota más alta: " + notaMaxima;
}

function hayAplazados() {
    let hayAplazo = false;
    
    for (let i = 0; i < notas.length; i++) {
       if (notas[i] < notaMinima) { 
            hayAplazo = true; 
            break; 
        }
    }
    
    let mensaje = "No"; 
    
    if (hayAplazo === true) {
        mensaje = "Sí";
    }
    
    resultadoAplazados.textContent = "Resultado: " + mensaje;
}

listarNotas();