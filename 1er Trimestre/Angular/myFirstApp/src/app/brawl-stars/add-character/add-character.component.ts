import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/characters';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  constructor() { }

  @Input() nuevo: Character = {
    name: '', 
    health: 0
  }
  @Input() characters: Character[] = []

  addCharacter(){
    console.log(this.nuevo)
    let add = {name: this.nuevo.name, health:this.nuevo.health}
    this.characters.push(add);
    this.nuevo.name=""
    this.nuevo.health=0
  }

}
