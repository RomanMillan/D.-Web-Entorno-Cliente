import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Practica Contador
  inicial : number = 0;
  cant : number = 1;
  cantTotalMostrar !: number; //para no tener que inicializarla
  
  cantMostrar(e: number){
    this.cantTotalMostrar = e;
  }

  // Practica Formulario
  mostarNombre(e : string){
    console.log(e)
  }
  mostrarPassword(e : string){
    console.log(e)
  }

  // Practica empleados
  empleados = [
    {
      "nombre": "John",
      "apellido": "Doe",
      "cargo": "Desarrollador",
      "departamento": "Tecnología"
    },
    {
      "nombre": "Jane",
      "apellido": "Smith",
      "cargo": "Diseñadora",
      "departamento": "Diseño"
    },
    {
      "nombre": "Robert",
      "apellido": "Johnson",
      "cargo": "Gerente de Proyecto",
      "departamento": "Administración"
    },
    {
      "nombre": "Emily",
      "apellido": "Davis",
      "cargo": "Analista de Datos",
      "departamento": "Tecnología"
    },
    {
      "nombre": "Jane",
      "apellido": "AKA",
      "cargo": "Diseñadora",
      "departamento": "Diseño"
    }
  ]




  buscar(e : string){
    this.empleados.forEach(empleado => {
      if(empleado.nombre === e || empleado.apellido === e){
        
      }
    });
  }

}
