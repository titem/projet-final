import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Organisation} from '../../shared/models/organisation';
import {OrgService} from '../../shared/services/org-service/org-service.component';
import {ActivatedRoute} from '@angular/router';
import {LogService} from '../../shared/services/log-service/log-service.component';
import {Comment} from "../../shared/models/Comment";
import {Personne} from "../../shared/models/Personne";


@Component({
  selector: 'app-org-details',
  templateUrl: './org-details.component.html',
  styleUrls: ['./org-details.component.css']
})
export class OrgDetailsComponent implements OnInit {

  public org: Organisation;
  @ViewChild('comment') public el: ElementRef;

  public infoSection: boolean;
  public commenter: boolean;

  constructor(private orgService: OrgService, private activatedRoute: ActivatedRoute,
              private personeService: LogService) {
    this.infoSection = false;
    this.commenter = false;
  }

  ngOnInit() {
    this.org = this.orgService.getOrgByIndex(this.activatedRoute.snapshot.params.index);
  }

  ajouterCommentaire() {
    this.commenter = true;
  }

  saveComment(): void {
    let user: Personne;
    this.personeService.getCurrentUser().subscribe(value => {
      user = value;
    })
    let cmt = new Comment( 5, this.el.nativeElement.value, user);
    this.orgService.addComment(cmt, this.activatedRoute.snapshot.params.index );
    this.commenter = false;
  }
}
