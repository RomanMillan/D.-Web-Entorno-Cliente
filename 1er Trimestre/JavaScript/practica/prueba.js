//Declaramos las importaciones necesarias (npm)
const fs = require("node:fs");
const prompt = require("prompt-sync")({sigint:true})

//pedimos al usuario que inserte los datos
let number = parseInt(prompt("Inserte el numero de la tabla de multiplicar: "));
let file = prompt("Inserte el nombre del archivo: ")

//generamos la tabla de multiplicar
let table = "";
for(let i=0;i<=10;i++){
    table += `${i} X ${number} =  ${i*number} \n`;
}

//generamos el archivo y guardamos la información dentro.
fs.writeFile(file,table,(err=>{
    if(err)throw err;
    console.log("Error");
}))