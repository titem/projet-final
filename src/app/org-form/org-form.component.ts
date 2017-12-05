import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Organisation} from '../shared/models/organisation';
import {Adresse} from '../shared/models/Adresse';
import {OrgService} from '../shared/services/org-service/org-service.component';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent implements OnInit {
  public formOrg: FormGroup;
  public org: Organisation;
  public adr: Adresse;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orgService: OrgService) {
  }

  ngOnInit() {
    this.formOrg = new FormGroup( {
      name: new FormControl(''),
      ville: new FormControl(''),
      code: new FormControl(''),
      rue: new FormControl(''),
      email: new FormControl(''),
      site: new FormControl(''),
      tel: new FormControl(''),
      horraire: new FormControl(''),
      age: new FormControl(''),
      condition: new FormControl(''),
      desc: new FormControl(''),
      capacity: new FormControl(''),
      photo: new FormControl('')
    } );



  }

  creerCreche(): void {
    this.adr = new Adresse(this.formOrg.get('rue').value, this.formOrg.get('code').value, this.formOrg.get('ville').value);
    this.org = new Organisation(this.formOrg.get('name').value,
                                '',
                                this.formOrg.get('photo').value,
                                this.formOrg.get('email').value,
                                this.formOrg.get('tel').value,
                                this.formOrg.get('site').value,
                                this.adr,
                                this.formOrg.get('desc').value,
                                this.formOrg.get('capacity').value,
                                '',
                                this.formOrg.get('horraire').value,
                                this.formOrg.get('condition').value,
                                this.formOrg.get('capacity').value, null);

    this.orgService.createOrg(this.org);
    this.router.navigate(['espaceCreche/list']);
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
