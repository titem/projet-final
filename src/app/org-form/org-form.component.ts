import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  creerCreche(): void {
    this.router.navigate(['espaceCreche/list']);
  }

  allerHome(): void {
    this.router.navigate(['home']);
  }
  allerProfil(): void {
    this.router.navigate(['profil', 1]);
  }
  allercreche(): void {
    this.router.navigate(['org']);
  }

}
