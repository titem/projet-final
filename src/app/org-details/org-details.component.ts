import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-details',
  templateUrl: './org-details.component.html',
  styleUrls: ['./org-details.component.css']
})
export class OrgDetailsComponent implements OnInit {

  public infoSection: boolean;

  constructor() {
    this.infoSection = false;
  }

  ngOnInit() {
  }

}
