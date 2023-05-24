//Selecciona todos los elementos de tipo h2 y pon el texto de color rojo.
let h2Red = [...document.querySelectorAll("div h2")];
h2Red.map(h2=>h2.style.color="red");

//Modifica el precio del vuelo para que ahora sea $199.99
let vuelo = [...document.querySelectorAll(".details")];
vuelo.map(span=>span.innerHTML="199.99");

//Modifica todos los títulos de las vacaciones (h2), su nuevo valor será 
//"Sanlúcar de Barrameda".
let h2Titulo = [...document.querySelectorAll("div h2")];
h2Titulo.map(h2=>h2.innerHTML="Sanlúcar de Barrameda");

//Selecciona la lista de vacaciones cuyo id es #vacations.
let idVacations = document.querySelector("#vacations");
console.log(idVacations);

// Selecciona aquellos ítems que tenga la clase .america
let classAmerica = [...document.querySelectorAll(".america")];
console.log(classAmerica);
