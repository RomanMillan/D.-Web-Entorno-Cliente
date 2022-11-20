//para que el usuario pueda modificar el título
let titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true");

//--------------------------------------------------------------------------

// función de aplicar nuevas posiciones (INACABADO)
function aplicar(){
    let posicion = document.querySelector(".posicion");
    let equipo = document.querySelector(".equipo");
    let puntos = document.querySelector(".puntos");
}

//---------------------------------------------------------------------------

//funcion para mostrar los datos metidos y ocultarlos
function informacion(){
    let valor = document.querySelector(".infoBoton");
    //tengo que borrar de primera el hidden porque aunque lo oculte
    // no me lo me lo muestra. Entonces el truco es crearlo de primera
    // y despues borrarlo cuando quiera ocultar la informacion.
    let alterarInformacionD = document.querySelector("#informacionD");
    alterarInformacionD.removeAttribute("hidden");
    if(valor.getAttribute("value") == "0"){
        let posicion = document.querySelector(".posicion");
        let equipo = document.querySelector(".equipo");
        let puntos = document.querySelector(".puntos");
        informacionD.innerHTML = "Posición: "+  posicion.value + "<br>"
        + "Equipo: " + equipo.value + "<br>"
        + "Puntos: " + puntos.value;
        valor.setAttribute("value","1");
    }else{
        alterarInformacionD = document.querySelector("#informacionD");
        alterarInformacionD.setAttribute("hidden","true");
        valor.setAttribute("value","0");
    }
}

//-----------------------------------------------------------------------

//función que nos muestra un mensaje en lugar de la tabla.
function enviar(){
    let tabla = document.querySelector(".tabla");
    tabla.setAttribute("hidden","true");
    formEnviado.innerHTML = "formulario enviado correctamente";
}


//-------------------------------------------------------------------
//fución que modifica una celda si esta es clikeada
function color(){
    let cColor = document.querySelector(".pColor");
    cColor.style.backgroundColor = "red";
    cColor.style.fontSize = "30px"
    cColor.style.color = "blue"
}


//--------------------------------------------------------------------
//función para añadir y borrar datos en una lista
function lista(){
    let contPos = document.createTextNode(document.querySelector(".posicion").value);
    let listaOl = document.querySelector(".lista");
    let listaLi = document.createElement("LI");
    listaOl.appendChild(listaLi);
    listaLi.appendChild(contPos);
}

function borrarList(){
    let pos = document.querySelector(".equipo").value;
    pos = parseInt(pos);
    let liBorrar = document.getElementsByTagName("li")[pos-1];
    liBorrar.remove();
}






function listaDes(){
    let listaDes = document.querySelector(".listaDes");
    let listBorrar = listaDes.firstElementChild;
    listBorrar.remove();
}

function listaOrd(){
    let listaOrd = document.querySelector(".listaOrd");
    //meto en un nodo todos los elementos hijos de listaOrd en listBorrar
    let listBorrar = listaOrd.children;
    // Ahora puedo selececcionar de todos ellos uno en concreto
    // si intento seleccionar un elemento hijo desde listaOrd da error.
    //hay que "desengranarlo"
    let selectT = listBorrar[1]; 
    selectT.remove();
}
