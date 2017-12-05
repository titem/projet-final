import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  public mode: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mode = this.activatedRoute.snapshot.params.mode;
  }

  allerHome(): void {
    this.router.navigate(['home']);
  }
  allerProfil(): void {
    this.router.navigate(['profil']);
  }

  editer(): void {
    this.mode = 1;
  }

  creer(): void {
    this.router.navigate(['home']);
  }

  allercreche(): void {
    this.router.navigate(['org']);
  }
}
