# Angular - @Input y @Output

## @Input

La directiva @Input se utiliza para pasar datos de un componente padre a un hijo. Esto nos permite comunicar información desde un componente superior hacia componentes secundarios.

Ej: Supongamos que tenemos un componente llamado "PadreComponent" y otro componente llamado "HijoComponent". Queremos pasar un mensaje del componente padre al componente hijo. 

**padre.component.html**

```html
<app-hijo [mensaje]="mensajeDelPadre"></app-hijo>
```

**padre.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  mensajeDelPadre = '¡Hola desde el componente padre!';
}
```

**hijo.component.ts**

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() mensaje: string;
}
```

En el código anterior, hemos creado una propiedad llamada `mensajeDelPadre` en el componente padre y la hemos asignado a la propiedad `mensaje` del componente hijo utilizando la directiva @Input. 

Ahora, el componente hijo puede acceder y mostrar el mensaje proporcionado por el componente padre.

**hijo.component.html**

```html
<p>{{ mensaje }}</p>
```

Ahora, cuando el componente hijo se renderice, mostrará el mensaje del componente padre.

## @Output

La directiva @Output se utiliza para emitir eventos desde un componente hijo hacia su componente padre. Esto nos permite comunicar información desde componentes secundarios hacia componentes superiores. 

Supongamos que tenemos un componente llamado "HijoComponent" que contiene un botón. Cuando se hace clic en el botón, queremos enviar un evento al componente padre para informarle sobre el clic. 

**hijo.component.html**

```html
<button (click)="enviarEvento()">Haz clic</button>
```

**hijo.component.ts**

```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Output() eventoClic = new EventEmitter<void>();

  enviarEvento() {
    this.eventoClic.emit();
  }
}
```

**padre.component.html**

```html
<app-hijo (eventoClic)="manejarClic()"></app-hijo>
```

**padre.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  manejarClic() {
    console.log('Se hizo clic en el botón en el componente hijo.');
  }
}
```

En el código anterior, hemos creado un EventEmitter llamado `eventoClic` en el componente hijo y lo hemos utilizado para emitir un evento cuando se hace clic en el botón. 

Luego, en el componente padre, hemos utilizado la sintaxis  `(eventoClic)="manejarClic()"` para capturar y manejar ese evento.
