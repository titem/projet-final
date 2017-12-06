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
  public submited: boolean;
  public auth: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  authentifier(): void {

    this.submited = true;
    if (this.formLog.valid) {

      if ( (this.formLog.get('email').value === 'person@gmail.com')
           && (this.formLog.get('pwd').value === 'pwd') ) {
        this.auth = false;
        this.router.navigate(['home']);
      }else {
        this.auth = false;
      }
    }
  }

  ngOnInit() {
    this.auth = true;
    this.submited = false;
    this.formLog = new FormGroup( {
      email: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required)
    } );
  }

  creerCompte(): void {
      this.router.navigate(['profil', 1]);
  }

}
