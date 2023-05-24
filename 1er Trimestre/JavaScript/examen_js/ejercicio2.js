
cont = 1;
contP = 1;

function anadir(){
    let listaP = document.getElementById("lista");
    let pos = document.getElementById("borrar").value;

    let elememento = document.createElement("li");
    let texto = document.createTextNode(document.getElementById("nuevoElemento").value);
    elememento.appendChild(texto);
    if(cont<= 1){
        let elemP = document.getElementById(pos-1);
        listaP.insertBefore(elememento,elemP);
        cont++;
    }else{
        if(pos<= cont){
            pos += pos-cont;
            let elemP = document.getElementById(pos);
            listaP.insertBefore(elememento,elemP);
            cont++; 
        }else{
            let elemP = document.getElementById(pos-cont);
            listaP.insertBefore(elememento,elemP);
            cont++;            
        }
    }
}

function borrar(){
   let listaP = document.getElementById("lista");
   let pos = document.getElementById("borrar").value;
        let objeto = document.getElementsByTagName("li")[pos-1];
        listaP.removeChild(objeto);
}