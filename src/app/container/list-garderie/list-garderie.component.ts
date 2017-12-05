import { Component, OnInit } from '@angular/core';
import {Organisation} from '../../shared/models/organisation';
import {ActivatedRoute, Router} from '@angular/router';
import {OrgService} from '../../shared/services/org-service/org-service.component';

@Component({
  selector: 'app-list-garderie',
  templateUrl: './list-garderie.component.html',
  styleUrls: ['./list-garderie.component.css']
})
export class ListGarderieComponent implements OnInit {
  Orgs: Organisation[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orgService: OrgService) {
  }

  ngOnInit() {
    this.orgService.getListOrg().subscribe( (valeur) => {
       this.Orgs = valeur;
    });

  }

  redirigerDetail(index: number): void {
    this.router.navigate(['espaceCreche/detail', index]);
  }


}
