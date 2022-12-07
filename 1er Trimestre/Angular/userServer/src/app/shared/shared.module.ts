import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    NavbarComponent,
    NotFoundComponent,
  ]
})
export class SharedModule { }
