console.log(history.length);

let atrasP = document.getElementById("atras");
atrasP.addEventListener("click",enviarAtras);

function enviarAtras(){
    history.back();
}


let frenteP = document.getElementById("frente");
frenteP.addEventListener("click",haciaDelate);

function haciaDelate(){
    history.forward();
}
