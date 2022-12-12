import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  onReload() {
    this.router.navigate(['servers'], /*{ relativeTo: this.route }*/);
  }
  ngOnInit(): void {
  }

}
