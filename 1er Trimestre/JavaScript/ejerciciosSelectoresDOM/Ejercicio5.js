//Selecciona todos los módulos de primero
let modPrimero = document.querySelector("ul:first-of-type");
console.log(modPrimero);

//Selecciona el módulo Sistemas Informáticos
let modPrimero2 = document.querySelector('[href="SImod.html"]');
console.log(modPrimero2);

//Selecciona el módulo que va detrás de Sistemas Informáticos


//Selecciona los módulos que van detrás de Sistemas Informáticos


//Selecciona los módulos que tengan el atributo href
let allHREF = document.querySelectorAll('[href]');
console.log(allHREF);

//Selecciona los módulos que no tengan el atributo href
let notHREF = document.querySelectorAll('a:not([href])');
console.log(notHREF);

//Selecciona aquellos módulos que contengan la cadena 'mod'
let allMod = document.querySelectorAll('[href*="mod"]');
console.log(allMod);

//Selecciona aquellos módulos que empiecen por la cadena 'mod'
let empMod = document.querySelectorAll('[href^="mod"]');
console.log(empMod);

//Selecciona aquellos módulos que terminen con la cadena '.html'
let temHTML = document.querySelectorAll('[href$=".html"]');
console.log(temHTML);

//Selecciona todas las horas de los módulos de segundo
let modSegundo = document.querySelectorAll("ul:last-of-type li ul li:last-of-type");
console.log(modSegundo);

//Selecciona los ítems vacíos y añade el contenido 'Nodo vacío'
let vacios = [...document.querySelectorAll('li:empty')];
vacios.map(li=>li.innerHTML="Nodo vacio");

// Selecciona los módulos DWESE, DAW y EIE
let modulos = [...document.querySelectorAll('ul:last-of-type li')];
/*
let f = modulos.map(li=>li.childNodes[0]);
console.log(f)
*/
console.log(modulos[0].childNodes[0]);