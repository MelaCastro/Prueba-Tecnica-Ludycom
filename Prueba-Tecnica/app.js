// Configuracion de nombres
let jugador1 = prompt("Introduce el nombre del jugador 1 :")
let jugador2 = prompt("Introduce el nombre del jugador 2 :")

function validarNombres(){
    if((jugador1 == "") || (jugador2 == "")){
        alert("Los nombres no pueden quedar vacios")
        return false

    } else{
        document.write("Jugador 1: " + jugador1 + "</br>")
        document.write("Jugador 2: " + jugador2 + "</br>")
        document.write("Iniciando partido" + "</br>")
    }
};

validarNombres()

//Definir los puntajes
let puntos = [0, 15, 30, 40, "Se gana el juego"]

// puntajes iniciales
jugador1 = 0
jugador2 = 0

document.write("Puntos jugador 1: " + jugador1 + "</br>")
document.write("Puntos jugador 2: " + jugador2 + "</br>")

function definirPuntaje() {
    document.querySelectorAll("#m1").value(puntos[jugador1])
    document.querySelectorAll("#m2").value(puntos[jugador2])
}

const sumar1 = document.querySelectorAll('#sumar1')
const sumar2 = document.querySelectorAll('#sumar2')

eventListeners()
function eventListeners() {
    sumar1.addEventListener('click',function(event) {
			
        if (jugador1 === 4 || (jugador1 === 3 && jugador2 < 3)) { 
            jugador1 = 0
            jugador2 = 0
    
        } else if (jugador1 === 3 && jugador2 === 4) { 
            jugador1 = 3
            jugador2 = 3
        } else { 
            jugador1++
        }
        event.preventDefault()
        definirPuntaje()
    })
    
    // añadir punto al jugador 2
    sumar2.addEventListener('click',function(event) {
    
        if (jugador2 === 4 || (jugador1 < 3 && jugador2 === 3)) { 
            jugador1 = 0
            jugador2 = 0
           
        } else if (jugador1 === 4 && jugador2 === 3) { 
            jugador1 = 3
            jugador2 = 3
        } else { 
            jugador2++
        }
        event.preventDefault()
        definirPuntaje()
    })
}
