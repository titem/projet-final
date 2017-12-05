import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
  }

  allerHome(): void {
    this.router.navigate(['home']);
  }
  allerProfil(): void {
    this.router.navigate(['profil', 2]);
  }
  allercreche(): void {
    this.router.navigate(['org']);
  }

}
