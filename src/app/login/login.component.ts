import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLog: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  authentifier(): void {
    if (this.formLog.valid) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
    this.formLog = new FormGroup( {
      email: new FormControl('', this.emailValidcustom),
      pwd: new FormControl('', [Validators.required])
    } );
  }

  emailValidcustom(formControl: FormControl):  boolean | void {
    if (formControl.dirty) {
      return null;

  }
  }

  creerCompte(): void {
      this.router.navigate(['profil', 1]);
  }

}
