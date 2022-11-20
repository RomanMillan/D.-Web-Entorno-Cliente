function anadirEqui2(){
    let tablaV = document.getElementById("tabla");
    let poss = document.getElementById("pos").value;
    let posV = document.createTextNode(document.getElementById("pos").value);
    let eqV = document.createTextNode(document.getElementById("eq").value);
    let ponV = document.createTextNode(document.getElementById("pun").value);

    var nFila = tablaV.insertRow(poss);
    var nueCelda = nFila.insertCell(0);
    var nueCelda2 = nFila.insertCell(1);
    var nueCelda3 = nFila.insertCell(2);

    nueCelda.appendChild(posV);
    nueCelda2.appendChild(eqV);
    nueCelda3.appendChild(ponV);
    
    poss = parseInt(poss);
    let fila = document.getElementsByTagName("tr")[poss+1];
    fila.remove();

}