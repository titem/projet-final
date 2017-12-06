import { Component, OnInit } from '@angular/core';
import {Organisation} from '../../shared/models/organisation';
import { ActivatedRoute, Router } from '@angular/router';
import { OrgService } from '../../shared/services/org-service/org-service.component';
import { Nursery } from '../../shared/interfaces/nursery';

@Component({
  selector: 'app-list-garderie',
  templateUrl: './list-garderie.component.html',
  styleUrls: ['./list-garderie.component.css']
})
export class ListGarderieComponent implements OnInit {
  nurseries: Nursery[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orgService: OrgService) {
  }

  ngOnInit() {
    this.orgService.fetchAll().subscribe( (list) => {
       this.nurseries = list;
    });
  }

  navigateDetails(nursery: Nursery): void {
    this.router.navigate(['espaceCreche/detail', nursery.id]);
  }


}
