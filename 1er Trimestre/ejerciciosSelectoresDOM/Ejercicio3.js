//Pon tu nombre al atributo value del campo first name
let valor = document.querySelector("input");
valor.setAttribute("value", "Roman");

//Pon el valor a la pregunta Favorite Day of Week a Monday
let valor2 = document.querySelector("select :last-child");
valor2.setAttribute("selected",true);

// Cambia la etiqueta de First name a 'Tu nombre'
document.querySelector("label").innerHTML = "Pon tu nombre: ";

// Obtén el valor del atributo 'name' del campo Favorite Day of The Week
let nombre = document.querySelector("select");
console.log(nombre.getAttribute("name"));

//Escoge la opción Female de la pregunta de género.
//Si queremos borrar el checked de male
//let generoM = document.querySelector("form :nth-child(8)");
//generoM.removeAttribute("checked");
let genero = document.querySelector("form :nth-child(10)");
genero.setAttribute("checked",true);

//Encuentra la primera form del documento y pon el atributo name = job_info
let form = document.querySelector("form");
let nameForm = form.setAttribute("name","job_info");

//Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 
//'Entrevista de trabajo' respectivamente


// Agrega un título a la pregunta Male/Female 'Gender'
//let tituloGender = document.querySelector();

//Agrega una pregunta Email: con un input de tipo texto después de last name


//Agrega la clase form a ambos formularios
let formClass = document.querySelectorAll("form :nth-of-type(even)");
console.log(formClass[1])
//formClass[1].setAttribute("class","formulario");
