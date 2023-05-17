# Recuperación de datos de inputs HTML

## Sin FormsModule

Además de utilizar @Input y @Output, también podemos recuperar datos de elementos HTML de entrada, como campos de texto, casillas de verificación, botones de opción, etc., dentro de nuestros componentes de Angular.

**ejemplo.component.html**

```html
<input #miInput type="text">
<button (click)="obtenerValor(miInput.value)">Obtener Valor</button>
```

**ejemplo.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {
  obtenerValor(valor: string) {
    console.log('Valor del input:', valor);
  }
}
```

En el código anterior, hemos utilizado la referencia de plantilla `#miInput` en el elemento `<input>` para acceder a su valor dentro del componente. Luego, hemos utilizado el método `obtenerValor()` para recibir el valor del input y mostrarlo en la consola.

## Con FormsModule

Para vincular inputs HTML con propiedades del archivo TypeScript en Angular, puedes utilizar la sintaxis de enlace de propiedades `[(ngModel)]`. Esto te permite establecer una comunicación bidireccional entre el valor del input y la propiedad en tu componente TypeScript.

**ejemplo.component.html**

```html
<input [(ngModel)]="nombre" type="text">
<p>Tu nombre es: {{ nombre }}</p>
```

**ejemplo.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {
  nombre: string = '';
}
```

En el ejemplo anterior, hemos vinculado el valor del input con la propiedad `nombre` en el componente TypeScript utilizando `[(ngModel)]`. Ahora, cada vez que el usuario escriba algo en el input, el valor se actualizará automáticamente en la propiedad `nombre`. Además, también hemos mostrado el valor actual de `nombre` utilizando la interpolación `{{ nombre }}`.

De esta manera, cualquier cambio realizado en el input se reflejará automáticamente en la propiedad del componente y viceversa.

Es importante tener en cuenta que para utilizar `[(ngModel)]`, debes importar el módulo `FormsModule` en el módulo de tu aplicación para habilitar el uso de directivas de enlace de formularios. Puedes hacerlo en el archivo `app.module.ts` de la siguiente manera:

```ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  // ...
})
export class AppModule { }
```

Asegúrate de importar el módulo `FormsModule` y agregarlo a la lista de importaciones en el módulo correspondiente de tu aplicación.
