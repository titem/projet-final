import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Organisation} from '../shared/models/organisation';
import {Adresse} from '../shared/models/Adresse';
import {OrgService} from '../shared/services/org-service/org-service.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent implements OnInit {
  public formOrg: FormGroup;
  public org: Organisation;
  public adr: Adresse;
  public submited : boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orgService: OrgService) {
  }

  ngOnInit() {
    this.submited = false;
    this.formOrg = new FormGroup( {
      name: new FormControl('', [Validators.required, Validators.maxLength(90)] ),
      ville: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      rue: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      site: new FormControl(''),
      tel: new FormControl('', this.validator_tel.bind(this)),
      horraire: new FormControl(''),
      age: new FormControl('', [Validators.min(0), Validators.max(9)]),
      condition: new FormControl(''),
      desc: new FormControl(''),
      capacity: new FormControl('', Validators.min(0)),
      effect: new FormControl('', Validators.min(0)),
      photo: new FormControl('', Validators.required)
    } );



  }


  validator_tel(element: FormControl): {[s: string]: boolean} {
    if (isNaN(element.value)) {
      return { isValid: true };
    }else {
      if ( element.value.length === 0 || element.value.length === 10  ) {
        return { isValid: false };
      }else {
        return { isValid: true };
      }
    }
  }

  creerCreche(): void {
    this.submited = true;
    if (this.formOrg.get('name').valid &&
      this.formOrg.get('ville').valid &&
      this.formOrg.get('rue').valid &&
      this.formOrg.get('code').valid &&
      (this.formOrg.get('email').hasError('email') && this.formOrg.get('email').value.length === 0) &&
      !this.formOrg.get('tel').hasError('isValid') &&
      this.formOrg.get('age').valid &&
      this.formOrg.get('capacity').valid &&
      this.formOrg.get('effect').valid &&
      this.formOrg.get('photo').valid )
    {
      console.log(this.formOrg.valid);
      this.adr = new Adresse(this.formOrg.get('rue').value, this.formOrg.get('code').value, this.formOrg.get('ville').value);
      this.org = new Organisation(this.formOrg.get('name').value,
        '',
        this.formOrg.get('photo').value,
        this.formOrg.get('email').value,
        this.formOrg.get('tel').value,
        this.formOrg.get('site').value,
        this.adr,
        this.formOrg.get('desc').value,
        this.formOrg.get('effect').value,
        this.formOrg.get('horraire').value,
        this.formOrg.get('condition').value,
        this.formOrg.get('capacity').value,
        this.formOrg.get('age').value,
        null);
      this.orgService.createOrg(this.org);
      this.router.navigate(['espaceCreche/list']);
    }
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
