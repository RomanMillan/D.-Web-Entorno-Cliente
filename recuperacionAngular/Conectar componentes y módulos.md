# Conectar componentes y módulos

Cuando tenemos un módulo y dentro uno o varios componentes.

Estructura donde tenemos un módulo (counter) y dentro un componente (contador)

<img src="file:///home/w/Imágenes/Capturas%20de%20pantalla/Captura%20desde%202023-05-17%2011-29-35.png" title="" alt="Captura desde 2023-05-17 11-29-35.png" data-align="center">

1. Declarar el componente (contador) que está dentro del módulo (counter).

2. También  tenemos que expoertarlo (En el mismo archivo módulo)
   
   **counter.module.ts**
   
   ```ts
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { ContadorComponent } from './contador/contador.component';
   
   @NgModule({
     declarations: [
       ContadorComponent //componente que queremos conectar
     ],
     imports: [
       CommonModule
     ],
     exports:[
       ContadorComponent //componente que queremos conectar
     ]
   })
   export class CounterModule { }
   ```

**app.module.ts**

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule //importamos el módulo contador
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Ya podemos mostrar la información del componente: contador en el componente principal

**contador.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador', // nombre que ser
  templateUrl: './contador.component.html'
})
export class ContadorComponent {

  cantidad : number = 0;

}
```

**app.component.html**

```html
<app-contador></app-contador>
```
