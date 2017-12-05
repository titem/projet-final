import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-org-details',
  templateUrl: './org-details.component.html',
  styleUrls: ['./org-details.component.css']
})
export class OrgDetailsComponent implements OnInit {

  public infoSection: boolean;
  public commenter: boolean;

  constructor() {
    this.infoSection = false;
    this.commenter = false;
  }

  ngOnInit() {
  }

  ajouterCommentaire() {
    this.commenter = true;
  }

  saveComment(): void {
    this.commenter = false;
  }
}
