import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../shared/models/Personne';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  public mode: number;
  public user: Personne;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mode = this.activatedRoute.snapshot.params.mode;
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


  editer(): void {
    this.router.navigate(['home']);
  }


}
