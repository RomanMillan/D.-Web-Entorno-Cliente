//Número de enlaces de la página
let numEnlaces = document.querySelectorAll("a");
console.log("Numero de enlaces: " + numEnlaces.length);

//Dirección a la que enlaza el penúltimo enlace
let enlace = numEnlaces[numEnlaces.length-2].href;
console.log("Dirección a la que enlaza el penúltimo enlace "+ enlace);

//Numero de enlaces que enlazan a http://prueba
let num = document.querySelectorAll("[href='http://prueba']");
console.log("Numero de enlaces que enlazan a http://prueba = " + num.length);

//Número de enlaces del tercer párrafo
let num3p = document.querySelectorAll("p:nth-child(3) a");
console.log(num3p.length);