import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../shared/models/Personne';
import {LogService} from '../shared/services/log-service/log-service.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  public mode: number;
  public user: Personne;
  public formCreate: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private logService: LogService) {
    this.mode = this.activatedRoute.snapshot.params.mode;
    if (this.mode == 2) {
      this.logService.getCurrentUser().subscribe( (value: Personne) => {
        this.user = value;
      });
    }else {
      this.user = new Personne('', '', '', '', '', '', '', '');
    }
  }

  ngOnInit() {
    this.formCreate = new FormGroup( {
      nom: new FormControl(''),
      ville: new FormControl(''),
      tel: new FormControl(''),
      email: new FormControl(''),
      pwd: new FormControl(''),
      img: new FormControl('')
   } );
  }

  allerHome(): void {
    this.router.navigate(['home']);
  }
  allerProfil(): void {
    this.router.navigate(['profil', 2]);
  }
  allercreche(): void {
    this.router.navigate(['nursery']);
  }


  editer(): void {
    this.user.nom = this.formCreate.get('nom').value;
    this.user.ville = this.formCreate.get('ville').value;
    this.user.tel = this.formCreate.get('tel').value;
    this.user.email = this.formCreate.get('email').value;
    this.user.passWord = this.formCreate.get('pwd').value;
    this.user.img = this.formCreate.get('img').value;
    this.mode = 2;

    this.logService.setCurrentUser(this.user);
    console.log(this.user.nom);
    /*
    this.logService.getCurrentUser().subscribe( value => {
      this.user = value;
    });*/
   // this.router.navigate(['profil', 2]);
  }


}
