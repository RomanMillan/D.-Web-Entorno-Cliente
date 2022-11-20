/* let nameX = document.querySelectorAll('*[name="x"]');
let n = nameX[0];
let form = n.querySelector('p');
form.innerHTML = "cantar";
form.style.color= "red";
console.log(form.textContent);
 */

//seleccionar el elemento "p" que está dentro del elemento "form"

//la forma corta
/* let x = document.querySelector("form p");
console.log(x.textContent); */

//cogemos todos los h1 del documento y los combertimos en array
let h1 = [...document.querySelectorAll("h1")];
//recorremos ese array con map
h1.map(h1=>h1.style.color="green");

/* 
____________________________________________________________
______________________________________________________________
*/


let span = document.querySelectorAll('a:not(a[name="h"])')
console.log(span)