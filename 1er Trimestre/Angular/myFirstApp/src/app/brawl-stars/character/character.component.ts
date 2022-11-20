import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/characters';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  constructor() { }
  
  @Input() characters: Character[] = [] 
}
