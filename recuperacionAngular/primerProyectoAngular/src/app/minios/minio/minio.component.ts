import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-minio',
  templateUrl: './minio.component.html'
})
export class MinioComponent implements OnInit {

  constructor() { }

  @Input() minions:any;
  ngOnInit(): void {
  }

}
