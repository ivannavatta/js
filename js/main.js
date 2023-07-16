


const Min_num = 50
const Max_num = 100
const Numero_random = Math.ceil(Math.random()*(Max_num - Min_num) + Min_num);


    function jugar(){
    let Numero_jugador = 0;
    let Intentos = 5
    let intentos = 0
    for(let i = 1; i <= Intentos; i++){
     intentos ++;
    Numero_jugador = parseInt(prompt("Encontra el numero entre el 50 y 100:"));
    
    if(Numero_jugador === Numero_random) {
        alert("Acertaste el numero era " + Numero_jugador + ` en ${intentos} intentos`);
        return;
    }
    if(Numero_jugador < Numero_random) {
        alert("El numero es mayor a " + Numero_jugador)
    }
    else {
        alert("el numero es menor a " + Numero_jugador)
    }
}
if(Intentos=5){
    alert("Game over")
}
    }
    
   
    
    function comenzar(){
        jugar();
    }

