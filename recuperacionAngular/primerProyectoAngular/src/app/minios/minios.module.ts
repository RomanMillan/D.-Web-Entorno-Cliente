import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MinioComponent } from './minio/minio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuComponent,
    MinioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MinioComponent,
    MenuComponent
  ]
})
export class MiniosModule { }
